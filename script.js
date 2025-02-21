function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function showResumePopup() {
    document.getElementById("resumePopup").style.display = "block";
}

function closeResumePopup() {
    document.getElementById("resumePopup").style.display = "none";
}
