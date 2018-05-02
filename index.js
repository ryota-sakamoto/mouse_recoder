window.onload = () => {

    let mouse_history = [];
    document.addEventListener("mousemove", (e) => {
        mouse_history.push(e);
    });

    const record_start_button = document.getElementById("record_start_button");
    record_start_button.addEventListener("click", (e) => {
        record_start_button.value = "record stop";
    });
}