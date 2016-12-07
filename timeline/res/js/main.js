$(document).ready(function () {
    b();
    $('#gotop').click(function () {
        $('body,html').animate({scrollTop: 0}, 300);
    });
//    if(navigator.userAgent.indexOf("MSIE")>0){
//        layer.alert('哎哟~~发现你在使用IE浏览器哦~~，本页面在IE下显示效果不佳，推荐使用Chrome~~',-1);
//    }

    $('#contact').click(function () {
		var contactTipPanel = '' +
            '<div class="contact-tip"><br />' +
                '<ul><nobr>' + contactTipPanelData.group.title + '</nobr>';
		
		for(i=0;i<contactTipPanelData.group.groups.length;i++){
			contactTipPanel = contactTipPanel + 
				'<li>' +
					'<a href="' + contactTipPanelData.group.groups[i].link + '" target="_blank"><nobr>' + contactTipPanelData.group.groups[i].title + '</nobr></a>' +
				'</li>';
		}
		contactTipPanel = contactTipPanel + 
				'</ul>' +
				'<ul><nobr>' + contactTipPanelData.email.title + '</nobr>' +
					'<li><nobr>' + contactTipPanelData.email.content + '</nobr></li>' +
				'</ul>' +
				'<br />' +
            '</div>';
		
		/*
        var contactTipPanel = '' +
            '<div class="contact-tip"><br />' +
                '<ul>FIUI官方交流群' +
                    '<li>' +
                        '<a href="http://shang.qq.com/wpa/qunwpa?idkey=9c528f677d8f859c8b937c7d4e8042da44351fd88296c122fec9681becdc91ff" target="_blank">①群&nbsp;175147649&nbsp;[已满]</a>' +
                    '</li>' +
                    '<li>' +
                        '<a href="http://shang.qq.com/wpa/qunwpa?idkey=16e9b4f8ae90cc4a153697c1e800440957b47b4904b454075f0f1edc1d00f3c1" target="_blank">②群&nbsp;14655891&nbsp;&nbsp;[已满]</a>' +
                    '</li>' +
					'<li>' +
                        '<a href="http://shang.qq.com/wpa/qunwpa?idkey=ebead1ff31ec76b84a8f65d92fe6a43332ebed412ae353ab28046d0f2868cbba" target="_blank">③群&nbsp;167162585</a>' +
                    '</li>' +
                '</ul>' +
                '<ul>合作联系' +
                    '<li>fiui@fiui.org</li>' +
                '</ul>' +
                '<br />' +
            '</div>';
		*/
        contactTip = layer.tips(contactTipPanel,
            this, {
                style: ['background-color:#263238; color:#fff', '#263238'],
                time: 10,
                maxWidth: 240,
                maxHeight: 280
            });
    });
});
function b() {
    h = 200;
    t = $(document).scrollTop();
    if (t > h) {
        $('#gotop').fadeIn();
    } else {
        $('#gotop').fadeOut();
    }
}
$(window).scroll(function (e) {
    b();
});