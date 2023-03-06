import axios from "axios";

export class SubsystemService {
  private static URL: string = "http://localhost:8800/api/subsystem";

  public static fetchSubsystem(id: string | undefined) {
    let SubsystemURL: string = `${this.URL}/getData`;
    return axios.post(SubsystemURL, {
      id: id,
    });
  }
}
