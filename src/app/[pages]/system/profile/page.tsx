import next from "next";
import Header from "../../../(components)/header";
import Button from "@mui/material/Button";
import styles from "./profile.module.scss";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";

import { promises as fs } from "fs";

export default async function page() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf-8");
  const data = JSON.parse(file);

  return (
    <>
      <Header />

      <div className={styles.info}>
        <Avatar
          src={data.user1.img}
          sx={{
            width: 90,
            height: 90,
          }}
        />
        <p>Имя: {data.user1.name}</p>
        <p>Фамилия:{data.user1.lastname}</p>
        <p>Отчество:{data.user1.firstname}</p>
        <p>Возраст: {data.user1.age}</p>
        <p>Курс: {data.user1.curs}</p>
        <Button variant="contained">Редактировать информацию</Button>
      </div>
    </>
  );
}
