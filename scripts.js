document.getElementById('uploadBtn').addEventListener('click', function() {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const imageSelect = document.getElementById('imageSelect');
    
    if (imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagePreview.innerHTML = '';
            imagePreview.appendChild(img);
            
            const option = document.createElement('option');
            option.value = e.target.result;
            option.text = `Image ${imageSelect.length + 1}`;
            imageSelect.appendChild(option);
        };
        
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        alert('Please select an image to upload.');
    }
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const imageSelect = document.getElementById('imageSelect');
    const quantity = document.getElementById('quantity').value;
    const orderStatus = document.getElementById('orderStatus');
    
    if (imageSelect.value) {
        orderStatus.innerText = `Order placed successfully for ${quantity} of ${imageSelect.selectedOptions[0].text}.`;
        orderStatus.style.color = 'green';
    } else {
        orderStatus.innerText = 'Please select an image.';
        orderStatus.style.color = 'red';
    }
});
