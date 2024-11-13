import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Capacitor } from '@capacitor/core';

interface Student {
  name: string;
  email: string;
  role: string;
  uid: string;
}

interface Asistencia {
  uidEstudiante: string;
  nombre: string;
  email: string;
  fecha: Date;
  estado: string;
  horaLlegada: string;
  asignatura: string;
  seccion: string;
}

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage {
  selectedAsignatura: string | null = null;
  selectedSeccion: string | null = null;
  isReadyToScan: boolean = false;
  isSupported = false;
  asignaturas = ['Programación', 'Base de Datos', 'Calidad'];
  secciones = {
    'Programación': ['PGY_1', 'PGY_2', 'PGY_3'],
    'Base de Datos': ['BD_1', 'BD_2', 'BD_3'],
    'Calidad': ['CAL_1', 'CAL_2', 'CAL_3']
  };
  seccionesFiltradas: string[] = [];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private firestore: AngularFirestore,
  ) {}

  async ngOnInit() {
    if (!Capacitor.isNativePlatform()) {
      console.log('El escaneo de códigos no está soportado en la plataforma web.');
      await this.showErrorAlert("Esta función sólo está disponible en dispositivos móviles.");
      return;
    }

    const result = await BarcodeScanner.isSupported();
    this.isSupported = result.supported;
  }

  onSelectAsignatura() {
    if (this.selectedAsignatura) {
      this.seccionesFiltradas = this.secciones[this.selectedAsignatura];
      this.selectedSeccion = null;
      this.updateIsReadyToScan();
    }
  }

  onSelectSeccion() {
    this.updateIsReadyToScan();
  }

  updateIsReadyToScan() {
    this.isReadyToScan = !!this.selectedAsignatura && !!this.selectedSeccion;
  }

  async startScan() {
    if (this.isReadyToScan && this.isSupported) {
      const granted = await this.requestPermissions();
      if (!granted) {
        await this.showPermissionAlert();
        return;
      }

      const { barcodes } = await BarcodeScanner.scan();
      if (barcodes.length > 0) {
        console.log("Código QR escaneado:", barcodes[0].rawValue);
        this.markAsPresent(barcodes[0].rawValue);
      } else {
        console.log("Escaneo cancelado o sin datos.");
      }
    } else {
      await this.showErrorAlert("Seleccione asignatura y sección antes de escanear.");
    }
  }

  private async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    if (camera !== 'granted' && camera !== 'limited') {
      await this.showCameraAccessAlert();
    }
    return camera === 'granted' || camera === 'limited';
  }

  private async markAsPresent(uidEstudiante: string) {
    try {
      // Verificar selecciones
      if (!this.selectedAsignatura || !this.selectedSeccion) {
        await this.showErrorAlert("Seleccione asignatura y sección");
        return;
      }

      const userDocRef = this.firestore.collection('users').doc(uidEstudiante);
      const userDoc = await userDocRef.get().toPromise();

      if (userDoc?.exists) {
        const studentData = userDoc.data() as Student;
        
        // Verificar si ya existe una asistencia para hoy
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const asistenciasRef = this.firestore.collection('asistencias');
        const existingAsistencia = await asistenciasRef
          .ref.where('uidEstudiante', '==', uidEstudiante)
          .where('asignatura', '==', this.selectedAsignatura)
          .where('seccion', '==', this.selectedSeccion)
          .where('fecha', '>=', today)
          .get();

        if (!existingAsistencia.empty) {
          await this.showErrorAlert("Ya se registró asistencia para este estudiante hoy");
          return;
        }

        // Crear nuevo registro de asistencia
        const presenciaData: Asistencia = {
          uidEstudiante: uidEstudiante,
          nombre: studentData.name,
          email: studentData.email,
          fecha: new Date(),
          estado: 'presente',
          horaLlegada: new Date().toLocaleTimeString(),
          asignatura: this.selectedAsignatura,
          seccion: this.selectedSeccion
        };

        // Guardar en la base de datos
        await asistenciasRef.add(presenciaData);

        await this.alertController.create({
          header: '¡Éxito!',
          message: `Asistencia registrada para ${studentData.name}`,
          buttons: ['OK']
        }).then(alert => alert.present());

      } else {
        console.error("No se encontró el estudiante con UID:", uidEstudiante);
        await this.showErrorAlert("Estudiante no encontrado. Verifica que el código QR sea válido.");
      }
    } catch (error) {
      console.error("Error completo:", error);
      await this.showErrorAlert("Error al procesar la asistencia: " + error.message);
    }
  }

  async showErrorAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['Cerrar']
    });
    await alert.present();
  }

  async showPermissionAlert() {
    const alert = await this.alertController.create({
      header: 'Permiso denegado',
      message: 'Para usar la aplicación, autorice los permisos de cámara.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async showCameraAccessAlert() {
    const alert = await this.alertController.create({
      header: 'Acceso a la cámara necesario',
      message: 'Esta aplicación necesita acceder a la cámara para escanear el código QR. Por favor, permita el acceso en la siguiente ventana.',
      buttons: ['OK']
    });
    await alert.present();
  }

  navigateToHomeAlumno() {
    this.router.navigate(['/home-alumno']);
  }
}
