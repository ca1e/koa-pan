import superagent from 'superagent'
import cheerio from 'cheerio'
const request = superagent.agent()

const PANURL = 'http://pan.baidu.com/disk/home'
const TITLE_BASE64 = '55m+5bqm572R55uYLeWFqOmDqOaWh+S7tg=='

class BDUtils {
  constructor(cookie){
    this.cookie = cookie
    this.uk = ''
    this.bdstoken = ''
  }
  async getUK() {
    let result = 'ok'
    try {
      const c = await request.get(PANURL).set('Cookie', this.cookie)
      const $ = cheerio.load(c.text)
      const title = new Buffer(TITLE_BASE64, 'base64').toString()
      if ($('title').text() == title) {
        const ukhtml = $('script').last().html();
        const uks = ukhtml.indexOf('"uk"')
        this.uk =ukhtml.substring(uks+5,uks+30).split(',')[0]
      }else{
        result = 'bad cookie'
      }
    }catch (e) {
      result = 'err occured'
    }
    return result
  }
  async getbdsToken() {
    let result = ''
    try {
      const c = await request.get(PANURL).set('Cookie', this.cookie)
      const $ = cheerio.load(c.text)
      const title = new Buffer(TITLE_BASE64, 'base64').toString()
      if ($('title').text() == title) {
        const script = $(`script`,'body').last().text().split('&&')[1].split(',')
        this.bdstoken = script[0].split(`'`)[1]
      }else{
        result = 'bad cookie'
      }
    }catch (e) {
      result = 'err occured'
    }
    return result
  }
}

export default BDUtils;
