import axios from "axios";

export class MemberService {
  private static URL: string = "http://localhost:8800/api/member";

  public static fetchMember(id: string | undefined) {
    let UserURL: string = `${this.URL}/getData`;
    return axios.post(UserURL, {
      id: id,
    });
  }
}
