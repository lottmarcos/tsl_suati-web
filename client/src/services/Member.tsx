import axios from "axios";

export class MemberService {
  private static URL: string = "http://localhost:8800/api/member";

  public static fetchMember(id: string | undefined) {
    let UserURL: string = `${this.URL}/getData`;
    return axios.post(UserURL, {
      id: id,
    });
  }

  public static fetchMacros() {
    let MacroURL: string = `${this.URL}/getMacros`;
    return axios.get(MacroURL);
  }

  public static fetchMicros() {
    let MicroURL: string = `${this.URL}/getMicros`;
    return axios.get(MicroURL);
  }

  public static fetchComplements() {
    let ComplementURL: string = `${this.URL}/getComplements`;
    return axios.get(ComplementURL);
  }
}
