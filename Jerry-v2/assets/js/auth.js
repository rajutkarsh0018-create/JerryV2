document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("testBtn");

    btn.addEventListener("click", async () => {

        const result = document.getElementById("result");

        try {

            const { data, error } = await supabase
                .from("settings")
                .select("*");

            if (error) {
                result.innerText = "❌ " + error.message;
            } else {
                result.innerText = "✅ Supabase Connected Successfully!";
                console.log(data);
            }

        } catch (err) {
            result.innerText = "❌ " + err.message;
        }

    });

});
