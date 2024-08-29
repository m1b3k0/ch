document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(contactForm);
        console.log('Form submitted with the following data:');
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Show a success message
        alert('Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.');
        
        // Reset the form
        contactForm.reset();
    });
});

function initMap() {
    // Replace these coordinates with the actual coordinates of the clinic
    const clinicLocation = { lat: 48.2082, lng: 16.3738 };
    
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: clinicLocation
    });

    const marker = new google.maps.Marker({
        position: clinicLocation,
        map: map,
        title: 'Dr. Dr. Sabine Schmidt'
    });
}