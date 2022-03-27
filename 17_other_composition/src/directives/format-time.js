import dayjs from 'dayjs'

export default function(app) {
    app.directive("format-time", {
        mounted(el, bindings) {
            let formatString = "YYYY-MM-DD HH:mm:ss";
            if (bindings.value) {
                formatString = bindings.value;
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