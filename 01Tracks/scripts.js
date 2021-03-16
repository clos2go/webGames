let htmlTracks;

window.onload = function () {
    htmlTracks = document.querySelectorAll('track');
    displayTrackStatuses();
}

function displayTrackStatuses() {
    for (let i = 0; i < htmlTracks.length; i++) {
        let currentTrack = htmlTracks[i];
        console.log(currentTrack.label)
    }
}