// EDIT THE DETAILS IN THIS SECTION
const wedding = {
  names: "Vishnu & Navya",
  date: "2026-12-13T10:00:00", // Local time: YYYY-MM-DDTHH:MM:SS
  displayDate: "Sunday, 13 December 2026",
  eventTime: "Please add the wedding time",
  venueName: "Add your wedding venue",
  venueAddress: "Add the complete venue address, Kerala",
  mapUrl: "https://maps.google.com/?q=Kannur,Kerala",
  shareMessage: "We warmly invite you to celebrate the wedding of Vishnu & Navya on Sunday, 13 December 2026. We look forward to seeing you!"
};

const $ = (id) => document.getElementById(id);

["introNames","heroNames","welcomeNames","closingNames","footerNames"].forEach(id => $(id).textContent = wedding.names);
$("introDate").textContent = wedding.displayDate.replace("Sunday, ","").replaceAll(" "," · ");
$("heroDate").textContent = wedding.displayDate;
$("eventDate").textContent = wedding.displayDate;
$("eventTime").textContent = wedding.eventTime;
$("venueName").textContent = wedding.venueName;
$("venueAddress").textContent = wedding.venueAddress;
$("mapLink").href = wedding.mapUrl;

$("openInvitation").addEventListener("click", async () => {
  $("intro").classList.add("hidden");
  $("invitation").classList.remove("hidden");
  window.scrollTo(0,0);
  // Browsers require a user gesture before music can play.
  const audio = $("weddingMusic");
  if (audio.querySelector("source").getAttribute("src") !== "") {
    try { await audio.play(); $("musicToggle").querySelector("span").textContent = "Pause music"; }
    catch (_) { /* Music can still be started with the music button. */ }
  }
});

$("musicToggle").addEventListener("click", async () => {
  const audio = $("weddingMusic");
  if (audio.paused) {
    try { await audio.play(); $("musicToggle").querySelector("span").textContent = "Pause music"; }
    catch (_) { alert("Add your MP3 file to assets/audio/wedding-music.mp3 first."); }
  } else {
    audio.pause();
    $("musicToggle").querySelector("span").textContent = "Play music";
  }
});

function updateCountdown() {
  const target = new Date(wedding.date).getTime();
  const diff = target - Date.now();
  if (Number.isNaN(target)) return;
  if (diff <= 0) {
    ["days","hours","minutes","seconds"].forEach(id => $(id).textContent = "00");
    $("countdownMessage").textContent = "The celebration has begun!";
    return;
  }
  const units = {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000)
  };
  Object.entries(units).forEach(([id,value]) => $(id).textContent = String(value).padStart(2,"0"));
}
updateCountdown();
setInterval(updateCountdown, 1000);

$("shareButton").addEventListener("click", () => {
  const url = window.location.href;
  const message = `${wedding.shareMessage}\n\n${url}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});