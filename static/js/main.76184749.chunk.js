(this.webpackJsonplockdown=this.webpackJsonplockdown||[]).push([[0],{16:function(e){e.exports=JSON.parse('{"a":[{"id":0,"name":"You vs Lockdown","path":"YouCut_20200517_185530009","next":1},{"id":1,"name":"Start of Lockdown","path":"YouCut_20200517_220457726","question":{"text":"What should you buy?","description":"Lockdown has just started. You have to make a decision, quick! Before the shops run out. Quick! No Pasta is left","options":[{"text":"Panic Buy Food","item":"food","next":1000},{"text":"Buy a bike","item":"bike","next":0},{"text":"Buy Paper and Ink","item":"paper","next":1001}]}},{"id":1000,"name":"Choose Buy Food","path":"YouCut_20200517_223603301","next":2},{"id":1001,"name":"Buy Print Ink","path":"VID_20200517_153407","next":2},{"id":2,"name":"Activities","path":"VID_20200509_152316","question":{"text":"What activity should you do","description":"","options":[{"text":"Camping in Garden","next":3},{"text":"BBQ with friends","next":4}]}},{"id":3,"name":"Chose Camping","path":"VID_20200509_153938","next":26},{"id":26,"name":"MartKitCamping","path":"VID_20200509_154343","next":27},{"id":27,"name":"JaedaCloverCamping","path":"VID_20200509_154511","next":28},{"id":28,"name":"CampingSuccess","path":"VID_20200509_155003","next":29},{"id":26,"name":"Camping in Garden","path":"VID_20200509_221214","question":{"text":"Need a Wee","description":"","options":[{"text":"Break in","next":5},{"text":"Wee in garden","next":6}]}},{"id":4,"name":"Chose BBQ","path":"VID_20200509_152348","next":7},{"id":24,"name":"BBQ with friends","path":"VID_20200509_153402","next":7},{"id":25,"name":"BBQ with friends -2","path":"VID_20200509_153705","next":7},{"id":5,"name":"Break in","path":"VID_20200509_221425","next":8},{"id":6,"name":"Wee in garden","path":"VID_20200509_221315","next":9},{"id":7,"path":"VID_20200509_153844","name":"Death after BBQ"},{"id":8,"path":"","name":"Death after Break in"},{"id":9,"name":"Weekday","path":"VID_20200509_173421","question":{"text":"What should you buy","description":"","options":[{"text":"Buy Headphones","next":10},{"text":"Not but headphones","next":11}]}},{"id":10,"name":"Buy Headphones","path":"","next":13},{"id":11,"name":"Dont\' Buy Headphones","path":"","next":12},{"id":12,"name":"Battered to death","path":""},{"id":13,"name":"Exercise","path":"VID_20200509_160307","question":{"text":"What type of exercise","description":"","options":[{"text":"Exercise Bike","next":14},{"text":"Go for a walk","next":16}]}},{"id":14,"name":"Exercise Bike","path":"VID_20200509_160329","next":15},{"id":140,"name":"Exercise Bike 2","path":"VID_20200509_170310","next":15},{"id":15,"name":"Exercise Bike End","path":"VID_20200509_164538","next":16},{"id":160,"name":"Choose Walk","path":"VID_20200509_160355","next":160},{"id":160,"name":"Go for a walk","path":"VID_20200509_155719","next":161},{"id":161,"name":"Go for a walk 2","path":"VID_20200509_155812","next":162},{"id":162,"name":"Go for a walk 3","path":"VID_20200509_160029","next":162},{"id":17,"name":"Rubbish","path":"","routes":[{"condition":"food","next":18},{"condition":"!food","next":19}]},{"id":18,"path":"","name":"Panic Bough Food Death"},{"id":20,"name":"Throw away","path":"","next":21},{"id":21,"name":"Bored","path":"","question":{"text":"What do you want to do","description":"","options":[{"text":"Rappel","next":23},{"text":"Walk","next":22}]}},{"id":22,"name":"Walk death","path":""},{"id":23,"name":"Rappel","path":""},{"id":90,"name":"Leave house","path":"VID_20200509_161840"},{"id":900,"name":"ComputerPrint","path":"VID_20200509_162027"},{"id":901,"name":"ComputerPrint","path":"VID_20200509_162103"},{"id":902,"name":"Leave House1","path":"VID_20200509_162205"}]}')},20:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(12),r=n(16),s=(n(25),n(14)),d=n(8),c=n(9),l=n(7),u=n(11),h=n(10),p=n(13),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).handleClick=i.handleClick.bind(Object(l.a)(i)),i}return Object(c.a)(n,[{key:"handleClick",value:function(){this.props.onSelection(this.props.option)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(p.a,{key:this.props.option.text,variant:"primary",size:"lg",onClick:this.handleClick},this.props.option.text))}}]),n}(a.a.Component),x=n(6),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.question.options.map((function(t){return a.a.createElement(m,{key:t.text,option:t,onSelection:e.props.onSelection})}));return a.a.createElement(x.a,{show:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},a.a.createElement(x.a.Header,{closeButton:!0},a.a.createElement(x.a.Title,{id:"contained-modal-title-vcenter"},"You Decide")),a.a.createElement(x.a.Body,null,a.a.createElement("h4",null,this.props.question.text),a.a.createElement("p",null,this.props.question.description)),a.a.createElement(x.a.Footer,null,t))}}]),n}(a.a.Component),y=n(19),_=n(18),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).handleClick=i.handleClick.bind(Object(l.a)(i)),i}return Object(c.a)(n,[{key:"handleClick",value:function(e){this.props.onSelection(this.props.decisions[e])}},{key:"render",value:function(){var e=this,t=this.props.decisions.map((function(t,n){return a.a.createElement(p.a,{variant:"primary",size:"lg",key:t.text,onClick:e.handleClick.bind(e,n)},t.text)}));return a.a.createElement(x.a,{show:!0,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0},a.a.createElement(x.a.Header,{closeButton:!0},a.a.createElement(x.a.Title,{id:"contained-modal-title-vcenter"},"Oh No.")),a.a.createElement(x.a.Body,null,a.a.createElement("h4",null,"You didn't surivie Lockdown"),a.a.createElement("p",null,"Maybe one of your previous decisions was not right. Want to change your mind at a past decision?"),a.a.createElement("div",{className:"btn-group-vertical"},t)))}}]),n}(a.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(d.a)(this,n),(i=t.call(this,e)).state={currentVideo:i.props.videos[0],videoPlaying:!0,items:new Array,decisions:new Array},i.selectVideo=i.selectVideo.bind(Object(l.a)(i)),i.restartVideo=i.restartVideo.bind(Object(l.a)(i)),i}return Object(c.a)(n,[{key:"findVideoById",value:function(e,t){return e.find((function(e){return e.id===t}))}},{key:"findVideoByQuestion",value:function(e,t){return e.find((function(e){return e.question===t}))}},{key:"clipEnd",value:function(){var e=Object(s.a)({},this.state);if(this.state.currentVideo.next){var t=this.findVideoById(this.props.videos,this.state.currentVideo.next);t&&(e.currentVideo=t,e.videoPlaying=!0)}else e.videoPlaying=!1;this.setState(e)}},{key:"selectVideo",value:function(e){var t=Object(s.a)({},this.state),n=this.findVideoById(this.props.videos,e.next);n&&(t.currentVideo=n,t.videoPlaying=!0,e.item&&t.items.push(e.item),this.state.currentVideo.question&&t.decisions.push(this.state.currentVideo.question)),this.setState(t)}},{key:"restartVideo",value:function(e){var t=Object(s.a)({},this.state),n=this.findVideoByQuestion(this.props.videos,e);n&&(t.currentVideo=n,t.videoPlaying=!0,console.log("Deleting to index",t.decisions.indexOf(e)),t.decisions.splice(t.decisions.indexOf(e),9e9)),this.setState(t)}},{key:"render",value:function(){var e="videos/"+this.state.currentVideo.path+".mp4",t=i.createElement("br",null);return this.state.videoPlaying||(t=this.state.currentVideo.question?i.createElement(v,{question:this.state.currentVideo.question,onSelection:this.selectVideo}):i.createElement(k,{decisions:this.state.decisions,onSelection:this.restartVideo})),i.createElement(_.a,{className:"p-3"},i.createElement(y.a,null,i.createElement("h1",{className:"header"},"Welcome To You Vs Lockdown")),i.createElement("div",null,i.createElement("video",{key:e,width:"1100",height:"650",onEnded:this.clipEnd.bind(this),autoPlay:!0,controls:!0},i.createElement("source",{src:e,type:"video/mp4"}),"No video"),t))}}]),n}(i.Component),V=r.a;o.render(i.createElement(f,{videos:V}),document.getElementById("example"))}},[[20,1,2]]]);
//# sourceMappingURL=main.76184749.chunk.js.map