(function () {
    const jsonData = {
      "status": "CAPTURED", 
      "created": "2014-11-03T16:41:42Z", 
      "authCode": "792668", 
      "token": "bFy3h7W3D2tmOfYxl2msnLbUirY=", 
      "currency": "USD", 
      "amount": "10.55", 
      "id": "EMU254189574"
    };

    const generateJsonHtml = (json) => {
        const codeSection = document.querySelector('#code-section');
        const dl = document.createElement('dl');
        const jsonKyes = Object.keys(json);
        jsonKyes.forEach((key, index) => {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            dt.innerText = `"${key}"`;
            dd.innerText = `: "${json[key]}"`;
            if (index !== jsonKyes.length - 1) {
                dd.innerText += ','; 
            }
            dl.appendChild(dt);
            dl.appendChild(dd);
        });
        codeSection.prepend('{');
        codeSection.appendChild(dl);
        codeSection.append('}');
    };

    generateJsonHtml(jsonData);
})();
