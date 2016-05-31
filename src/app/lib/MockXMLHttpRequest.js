let mockRequests = {};

export function mockXMLHttpRequest() {
  window.XMLHttpRequest = () => {
    return {
      open(method, url) {
        this.method = method;
        this.url = url;
      },
      send() {
        //process.nextTick(() => {
          let mockKey = this.method + '_' + this.url;
          let res = mockRequests && mockRequests[mockKey];
          if(res) {
            this.status = 200;
            this.response = res;
          }
          else
            this.status = 404;
          this.onload && this.onload();
        //});
      }
    };
  };
}

export function addMockRequest(method, url, response) {
  mockRequests[method + '_' + url] = response;
}
