// =========================================================================
// SISTEMA DE SESIÓN Y REFERIDOS (Reemplazo de session_start de PHP)
// =========================================================================
(function inicializarReferido() {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');
    if (ref) {
        sessionStorage.setItem('referido_por', ref.replace(/\+/g, ' '));
    }
})();

// =========================================================================
// CONFIGURACIÓN GLOBAL - APRENDO CON ALEJO
// =========================================================================
export const SITE_CONFIG = {
    // 1. DATOS DE CONTACTO
    whatsappNumber: '573002779958',
    whatsappDisplay: '+57 300 2779958',
    emailContacto: 'correo@aprendoconalejo.com',
    adminEmail: 'correo@aprendoconalejo.com',

    // 2. REDES SOCIALES
    social: {
        tiktok: 'https://www.tiktok.com/@aprendoconalejo',
        youtube: 'https://www.youtube.com/@aprendoconalejo',
        instagram: 'https://www.instagram.com/aprendoconalejo'
    },

    // 3. FIREBASE CONFIG
    firebase: {
        apiKey: "AIzaSyCfjMkLs_HZTQiEWMUGIHnPsxRVI1XhHt0",
        authDomain: "aprendo-con-alejo.firebaseapp.com",
        projectId: "aprendo-con-alejo",
        storageBucket: "aprendo-con-alejo.firebasestorage.app",
        messagingSenderId: "669393763982",
        appId: "1:669393763982:web:95f229988d90c4e05e93df"
    },

    // 4. IDENTIDAD DE MARCA
    siteName: 'Aprendo con Alejo',
    siteTitle: 'Aprendo con Alejo',
    siteDescription: 'Herramientas de apoyo académico, que le ayudarán a alcanzar sus objetivos personales y profesionales.',
    siteUrl: 'https://aprendoconalejo.com',

    // 5. ESTADO Y CONTROL
    maintenance: false,
    versionAssets: '1.0.1',

    // Función auxiliar para leer el referido guardado en cualquier script
    getReferido: () => sessionStorage.getItem('referido_por') || ""
};
