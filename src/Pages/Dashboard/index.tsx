/* eslint-disable no-lone-blocks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AvatarImage from "../../images/avatar2.png";
import Card from "components/Card";
import Text from "components/Text";
import { EmptyStateIllustrator } from "../../images/emptyState";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LogoutIcon from "@mui/icons-material/Logout";
import Modal from "@mui/material/Modal";
import toast from "react-hot-toast";

import InputFields from "components/InputFields";
import AddIcon from "@mui/icons-material/Add";
import Button from "components/Button";
import Alert from "@mui/material/Alert";
import { logout, userDetails } from "redux/slices/user";
import { addEntry, getAllEntry, editEntry,deleteEntry} from "redux/slices/entries";

import { useAppDispatch } from "redux/store";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import {
  DashboardWrapper,
  Sidebar,
  Content,
  ImageWrapper,
  CardContainer,
  IconWrapper,
  ModalWrapper,
  ModalContent,
  ModalHeader,
  BtnWrapper,
  TopContent,
  EmptyState,
  ToastWrapper,
} from "./dashboard.styled";

interface EntryInfo {
  title: string;
  entry: string;
  id?: string;
}

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { entries: entriesStore, user } = useSelector((state: RootState) => state);
  const { data: userData}: any = user
  const { loading, error, entry, entries }: any = entriesStore;
  const [open, setOpen] = useState(false);
  const [newEntry, setNewEntry] = useState(false);
  const [errors, setErrors] = useState<EntryInfo>({
    title: "",
    entry: "",
  });

  const [inputs, setInputs] = useState<EntryInfo>({
    title: "",
    entry: "",
  });

  useEffect(() => {
    dispatch(getAllEntry());
  }, []);

  useEffect(() => {
    dispatch(userDetails());

  }, []);


  const handleClose = () => {
    setOpen(false);
    setNewEntry(false);
    setErrors({
    title: "",
    entry: "",
  })
  };

  const handleOpen = () => {
    setOpen(true);
    setErrors({
      title: "",
      entry: "",
    });

    setInputs((preState) => ({
      ...preState,
      title: "",
      entry: "",
    }));
  };

  const handleOpenEdit = (data: any) => {
    handleOpen()
    setInputs(data);
  };

  const notify = (msg: string) => toast.success(msg);

  useEffect(() => {
    if (entry?.status === "Success") {
      setOpen(false);
      setNewEntry(false);
      dispatch(getAllEntry());
      notify( newEntry ? "Successfully added a new entry" : "Successfully updated entry");
    }
  }, [entry]);

  const handleAdd = () => {
    if (Object.values(inputs).some((val) => val === "")) {
      setErrors({
        title: !inputs.title ? " title error" : "",
        entry: !inputs.entry ? " text error" : "",
      });
      return;
    }
    newEntry ? dispatch(addEntry(inputs)): dispatch(editEntry(inputs));

  };

  const handleChange = (event: React.ChangeEvent<any>) => {
    const { name, value } = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const SiderbarList = [
    {
      name: "Profile",
      icon: <PersonIcon />,
      // path: 'login'
    },
    {
      name: "Invite",
      icon: <EmailIcon />,
      // path: 'login'
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      path: "login",
    },
  ];

  const handleDelete = (id: number) => {
    dispatch(deleteEntry(id))
    // notify("Successfully deleted an entry");
  };

  if (loading) {
    <h2> loading ...</h2>;
  }
 
  return (
    <DashboardWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        children={
          <ModalWrapper>
            <div>
              <ModalHeader>
                <Text
                  text={`${newEntry ? "Enter" : "Update"} your entry`}
                  fontSize="20px"
                  alignCenter
                />
              </ModalHeader>
              {(errors.title || errors.entry) && (
                <ToastWrapper>
                  <Alert severity="error">Fields may not be blank</Alert>
                </ToastWrapper>
              )}

              {error && (
                <ToastWrapper>
                  <Alert severity="error">{error}</Alert>
                </ToastWrapper>
              )}
              <ModalContent>
                <Text text="Entry Title" fontWeight={500} />
                <InputFields
                  name="title"
                  marginTop="0px"
                  marginBottom="40px"
                  value={inputs.title}
                  onChange={handleChange}
                  inputWidth="97%"
                  border={`1px solid  ${errors.title ? "red" : "black"}`}
                />
                <textarea
                  rows={10}
                  name="entry"
                  defaultValue={inputs.entry}
                  onChange={handleChange}
                  style={{
                    width: "97%",
                    height: "200px",
                    padding: "10px",
                    borderRadius: "10px",
                    border: `1px solid ${
                      error || errors.entry ? "red" : "black"
                    }`,
                  }}
                />
                <BtnWrapper>
                  <Button
                    text="Cancel"
                    bgColor="#fff"
                    onClick={handleClose}
                    color="#081630"
                    width="92px"
                    height="34px"
                  />
                  <Button
                    text={loading ? "loading..." : newEntry ? "Add" : "Update"}
                    bgColor="#081630"
                    onClick={handleAdd}
                    width="92px"
                    height="34px"
                  />
                </BtnWrapper>
              </ModalContent>
            </div>
          </ModalWrapper>
        }
      />
      <Sidebar>
        <ImageWrapper src={AvatarImage} />
        <div style={{ marginTop: 40, width: "44%" }}>
          {SiderbarList.map((item, i) => (
            <IconWrapper
              onClick={() => {
                if (item.name === "Logout") {
                  dispatch(logout());
                }
                navigate(`/${item.path}`)
              }}
              key={i}
            >
              {item.icon}
              <Text text={item.name} pointer />
            </IconWrapper>
          ))}
        </div>
      </Sidebar>
      <Content>
        <TopContent>
          <Text text={`Welcome ${userData?.data?.username}!`} fontWeight={700} fontSize={"25px"} />
          <TopContent
            style={{ cursor: "pointer" }}
            onClick={() => {
              setNewEntry(true);
              handleOpen();
            }}
          >
            <AddIcon />
            <Text text="Add" />
          </TopContent>
        </TopContent>
        <>
          {entries?.length > 0 ? (
            <CardContainer>
              {entries?.map((entry: any) => {
                const date = new Date(entry.date).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });
              

                return (
                  <div key={entry.id}>
                    <Card
                      handleOpenEdit={() => handleOpenEdit(entry)}
                      title={entry.title}
                      text={entry.entry}
                      date={date}
                      handleDelete={() =>{ handleDelete(entry.id)}}
                    />
                  </div>
                );
              })}
            </CardContainer>
          ) : (
            <EmptyState>
              <EmptyStateIllustrator />
              <Text text="You have no entry. Click on Add" />
            </EmptyState>
          )}
        </>
      </Content>
    </DashboardWrapper>
  );
};

export default Dashboard;
