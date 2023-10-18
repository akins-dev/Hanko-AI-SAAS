
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL || "";

const GetUser = async() => {
    const hanko = new Hanko(hankoApi);
    const user = await hanko.user.getCurrent();
    console.log(`user: ${user}`);

    return  user
}

export default GetUser


