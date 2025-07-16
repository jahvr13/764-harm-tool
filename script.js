function togglePreview() {
    const preview = document.getElementById('websitePreview');
    if (preview.src === "") {
        preview.src = "https://www.pornhub.com";
    } else {
        preview.src = "";
    }
}
