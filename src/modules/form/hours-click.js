export function hoursClick() {
    const container = document.getElementById("hours");

    container.addEventListener("click", (event) => {
        const hour = event.target.closest(".hour-available");

        if (!hour) return;

        document.querySelectorAll(".hour").forEach((el) => {
            el.classList.remove("hour-selected");
        });

        hour.classList.add("hour-selected");
    });
}