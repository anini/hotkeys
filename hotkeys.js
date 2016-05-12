if (document.location.href.match(/progres.+\.unhcr\.org/) != null) {
	var hotkeys = ['#RST', '#RSD'];
	var values  = ['Resettlement', 'Refugee Status Determination'];
	var hotkeysCount = hotkeys.length;
	var inputs, index, i;
	var ids = [];

	function addEventListner() {
		inputs = document.getElementsByTagName('input');
		for (index = 0; index < inputs.length; index++) {
			if (ids.indexOf(inputs[index].id) == -1 && inputs[index].type == 'text') {
				ids.push(inputs[index].id);
				try {
					inputs[index].addEventListener('keydown', function() {
						for(i = 0; i < hotkeysCount; i++) {
							if (this.value.indexOf(hotkeys[i]) >= 0)
								this.value = this.value.replace(hotkeys[i], values[i]);
						}
					});
				}
				catch(err) { }
			}
		}
		inputs = document.getElementsByTagName('textarea');
		for (index = 0; index < inputs.length; ++index) {
			if (ids.indexOf(inputs[index].id) == -1) {
				ids.push(inputs[index].id);
				try {
					inputs[index].addEventListener('keydown', function() {
						for(i = 0; i < hotkeysCount; i++) {
							if (this.value.indexOf(hotkeys[i]) >= 0)
								this.value = this.value.replace(hotkeys[i], values[i]);
						}
					});
				}
				catch(err) { }
			}
		}
	}

	addEventListner();

	document.body.addEventListener('click', function() { addEventListner(); });

	var iFrame = document.getElementById('contentIFrame0');
	if (typeof(iFrame) != 'undefined' && iFrame != null)
	{
		var script = iFrame.contentWindow.document.createElement("script");
		script.type = "text/javascript";
		script.src = 'https://raw.githubusercontent.com/anini/hotkeys/master/hotkeys.js';
		iFrame.contentWindow.document.body.appendChild(script);
	}

	iFrame = document.getElementById('contentIFrame1');
	if (typeof(iFrame) != 'undefined' && iFrame != null)
	{
		var script = iFrame.contentWindow.document.createElement("script");
		script.type = "text/javascript";
		script.src = 'https://raw.githubusercontent.com/anini/hotkeys/master/hotkeys.js';
		iFrame.contentWindow.document.body.appendChild(script);
	}
}
