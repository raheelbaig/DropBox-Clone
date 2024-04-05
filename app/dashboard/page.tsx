
import Dropzone from "@/components/Dropzone";
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

const Dashboard = async () => {
  const { userId } = auth();

  const docsResult = await getDocs(collection(db, "users", userId!, "files"));
  console.log("Docs Result...",docsResult)
  const skeletonFiles: FileType[] = docsResult.docs.map((doc) => ({
    id: doc.id,
    fullName: doc.data().fullName,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));


    console.log("Skeleton Filess...", skeletonFiles);


  return (
    <div>
      <Dropzone />

      <section className="container space-y-5">
        <div>
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
