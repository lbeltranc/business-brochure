//Form
var es = document.getElementsByClassName('form-control');
    for (var i = 0; i < es.length; i++) {
        es[i].onfocus = function () {
            this.parentNode.className += " control-focus";
        }
        es[i].onblur = function () {
            var val;
            if (this.tagName == "SELECT") {
                val = this.options[this.selectedIndex].text;
            } else {
                val = this.value;
            }
            if (val != '') {
                this.parentNode.className = this.parentNode.className.replace("control-focus", "control-highlight");
            } else {
                this.parentNode.className = this.parentNode.className.replace("control-focus", "");
                this.parentNode.className = this.parentNode.className.replace("control-highlight", "");
            }
        }
    }