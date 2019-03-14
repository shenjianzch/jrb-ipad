function prt(order_no, shop_id, vm) {
  vm.$cloading('打印准备中...');
  //				mui.openUrl('http://www.baidu.cn');
  const UIPrintInteractionController = plus.ios.import(
    'UIPrintInteractionController'
  );
  const UIPrintInfo = plus.ios.import('UIPrintInfo');
  const NSURL = plus.ios.import('NSURL');
  //				plus.io.resolveLocalFileSystemURL("http://127.0.0.1:7004/pdf", function(entry) {
  //					console.log(entry);
  //				}, function (err) {
  //					console.error(JSON.stringify(err));
  //				})
  const down = plus.downloader.createDownload(
    serverUrl + '/agent/order/' + order_no + '?shop_id=' + shop_id + '&type=1',
    {
      filename: '_doc/ok.pdf'
    }
  );
  const handleChange = function(download, status) {
    if (download.state == 4 && status === 200) {
      // alert('Download success: ' + download.getFileName());
      vm.$cloading.close();
      const url = NSURL.fileURLWithPath(
        plus.io.convertLocalFileSystemURL(download.getFileName())
      );
      //				var url = NSURL.fileURLWithPath(plus.io.RemoteURL("_www/img/HBuilder.png"));
      //				var url = NSURL.fileURL
      if (UIPrintInteractionController.canPrintURL(url)) {
        const printInfo = UIPrintInfo.printInfo();
        printInfo.setJobName('dcloud.png');
        printInfo.setOutputType(0);
        const printInteractionController = UIPrintInteractionController.sharedPrintController();
        printInteractionController.setPrintInfo(printInfo);
        printInteractionController.setShowsNumberOfCopies(false);
        printInteractionController.setPrintingItem(url);
        printInteractionController.presentAnimatedcompletionHandler(true, null);
      } else {
        alert('not support');
      }
      //				plus.webview.open('http://jsbin.com/danecesugo/edit?html,output');
    } else {
      vm.$cloading.close();
    }
  };
  down.addEventListener('statechanged', handleChange, false);
  down.start();
}

export default prt;
