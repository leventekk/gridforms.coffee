(function(){var e;e={el:{fieldsRows:document.querySelectorAll("[data-row-span]"),fieldsContainers:document.querySelectorAll("[data-field-span]"),focusableFields:document.querySelectorAll("[data-field-span] input, [data-field-span] textarea, [data-field-span] select")},init:function(){var e;return e=[].filter.call(this.el.focusableFields,function(e){return e===document.activeElement}),this.focusField(e),this.equalizeFieldHeights(),this.events()},focusField:function(e){var t,i;for(t=!1;e&&!t;)i=e.parentElement,i&&i.matches("[data-field-span]")&&(t=!0,e=i),e=i;return e?e.classList.add("focus"):void 0},removeFieldFocus:function(){var e,t,i,n,l;for(n=this.el.fieldsContainers,l=[],t=0,i=n.length;i>t;t++)e=n[t],l.push(e.classList.remove("focus"));return l},events:function(){var e,t,i,n,l,r,s,a,o;for(o=this,s=o.el.fieldsContainers,i=0,l=s.length;l>i;i++)e=s[i],e.addEventListener("click",function(e){var t;return t=e.currentTarget.querySelector("input, textarea, select"),t?t.focus():void 0});for(a=o.el.focusableFields,n=0,r=a.length;r>n;n++)t=a[n],t.addEventListener("focus",function(e){return o.focusField(e.currentTarget)}),t.addEventListener("blur",function(e){return o.removeFieldFocus()});return window.addEventListener("resize",function(){return o.equalizeFieldHeights()})},equalizeFieldHeights:function(){var e,t,i,n,l,r,s,a,o,d,u;for(o=this.el.fieldsContainers,l=0,s=o.length;s>l;l++)e=o[l],e.style.height="auto";if(n=this.el.fieldsRows,i=this.el.fieldsContainers,!this.areFieldsStacked()){for(d=[],r=0,a=n.length;a>r;r++)t=n[r],u=t.clientHeight,d.push(function(){var i,n,l,r;for(l=t.querySelectorAll("[data-field-span]"),r=[],i=0,n=l.length;n>i;i++)e=l[i],r.push(e.style.height=u+"px");return r}());return d}},areFieldsStacked:function(){var e,t,i,n,l,r;if(t=[].filter.call(this.el.fieldsRows,function(e){return!e.matches('[data-row-span="1"]')}),r=0,t.length&&(t=t[0]),t.children){for(l=t.children,i=0,n=l.length;n>i;i++)e=l[i],r+=e.clientWidth;return t.clientWidth<=r}}},e.init(),window.GridForms=e}).call(this);