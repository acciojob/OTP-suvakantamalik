//your JS code here. If required.
const codes = document.querySelectorAll(".code");
codes.forEach((code, idx) => {
	code.setAttribute("id", `code-${idx++}`);
	code.addEventListener("keydown", (event) => {
		event.preventDefault();

		if(event.key >= "0" && event.key <= "9"){
			codes[idx].value = event.key;
			setTimeout(() => {
				codes[idx+1] && codes[idx+1].focus();
			},10);
		}
		else if(event.key === "Backspace"){
			codes[idx].value = "";
			setTimeout(() => {
				if(codes[idx-1]){
					codes[idx-1].focus();
					codes[idx-1].value = "";
				}
			},10);
		}
	})
})