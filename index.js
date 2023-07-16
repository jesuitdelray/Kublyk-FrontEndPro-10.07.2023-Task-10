let hours = prompt("Введіть кількість годин:")

if (isNaN(hours)) {
    alert("Only numbers allowed.")
} else {
    const seconds = hours * 3600
    alert(hours + " hours = " + seconds + " sec.")
}
