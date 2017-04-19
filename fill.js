import credentials from './credentials'

describe('login screen', () => {
    it('User login as sensity user', () => {
       browser.get('/');
       element(by.id('txtUserID')).sendKeys(credentials.userName)
       element(by.id('txtPassword')).sendKeys(credentials.password)
       element(by.id('ddlDomain')).click()
       element(by.xpath('//*[@id="ddlDomain"]/option[5]')).click()
       element(by.id('btnSubmit')).click()
       browser.sleep(1000)
       browser.get('https://wf4.myhcl.com/TSMS/');
       browser.sleep(1000)
       element(by.id('btnSkip')).click()
       browser.sleep(1000)
       element(by.xpath('//*[@id="global-centrecontent"]/table/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[3]/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td/table/tbody/tr[1]/td[3]/table/tbody/tr/td[3]/a')).click()
       //browser.sleep(5000)
       element(by.id('chkCopyToNextWeek')).click()
       element(by.id('chkThirdPartyDeclaration')).click()
       //element(by.id('LinkNext')).click()
       //browser.sleep(10000)
       //element(by.id('txtHoursRow0Day0')).sendKeys('08:00')
       for(var i=0;i<5;i++){
           var id = 'txtHoursRow0Day' + (i).toString()
           element(by.id(id)).sendKeys('08:00')
       }

       browser.pause()
       
    });
});