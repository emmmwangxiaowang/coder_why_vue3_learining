import dayjs from 'dayjs'

export default function(app) {
    app.directive("format-time", {
        mounted(el, bindings) {
            let formatString = "";
            if (bindings.value) {
                formatString = bindings.value;
            } else {
                formatString = "YYYY-MM-DD HH:mm:ss";
            }


            const textContent = el.textContent;

            let timestamp = parseInt(textContent);

            el.textContent = dayjs(timestamp).format(formatString);
            console.log(formatString);
            console.log(bindings.value)
            console.log(textContent);

        }
    })
}