import { Lista } from "./styles";

interface iService {
  id?: number;
  prodId?: number;
  userId: string;
  title: string;
  description: string;
  url: string;
  price: number;
  date: string;
  done: boolean;
  payed: boolean;
}

interface iUser {
  email: string;
  name: string;
  contact: string;
  id: string;
  cpf: number;
  admin?: boolean;
}

interface UserListInfoProps {
  services?: iService[] | undefined;
  users?: iUser[] | undefined;
  admin?: boolean | undefined;
  userServices?: iService[] | undefined;
}

const UserListInfo = ({
  services,
  users,
  admin = false,
  userServices,
}: UserListInfoProps) => {
  if (admin) {
    return (
      <ul>
        {!!services &&
          services.map((element) => {
            const fixDate = new Date(element.date);
            return (
              <Lista>
                <p>
                  {fixDate.getHours()}:{fixDate.getUTCMinutes()} |
                </p>
                <p>
                  {!!users &&
                    users
                      .filter((user) => user.id === element.userId)
                      .map((element) => element.name)}
                </p>
                <p>{element.title} | </p>

                <input name="isGoing" type="checkbox" />
              </Lista>
            );
          })}
      </ul>
    );
  }

  return (
    <ul>
      {!!userServices &&
        userServices.map((element) => {
          const fixDate = new Date(element.date);
          return (
            <Lista>
              <p>
                {fixDate.getHours()}:{fixDate.getUTCMinutes()} |
              </p>
              <p>{element.title}</p>
            </Lista>
          );
        })}
    </ul>
  );
};
export default UserListInfo;