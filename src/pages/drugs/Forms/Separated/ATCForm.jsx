import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { format } from "date-fns";

const currentDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");

const schema = yup.object().shape({
  code: yup
    .string()
    .required("Code is required")
    .matches(/^\d{1,3}$/, "Code must be up to 3 digits"),
  levelName: yup.string().required("Level Name is required"),
  levelNameAr: yup
    .string()
    .matches(
      /^[\u0621-\u064A\s]*$/,
      "Please use Arabic letters (أ ب ت) for the Level Name (Arabic)"
    )
    .required("Level Name (Arabic) is required"),
  atcrelatedLabel: yup.string().required("ATC Related Label is required"),
  enabled: yup.boolean().required("Enabled is required"),
});

const ATCForm = () => {
  const [formData, setFormData] = useState({
    code: "",
    levelName: "",
    levelNameAr: "",
    atcrelatedLabel: "",
    enabled: true,
    updatedDate: new Date().toISOString(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data against the schema
      await schema.validate(formData, { abortEarly: false });

      const newGuid = uuidv4();
      const config = {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjRhNjU3YTY0LTA1MmUtNGYyNy1hZGI0LWVjOTU1NmFiZmUzZSIsInJvbGUiOiIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWYiLCJwcml2aWxlZ2VzIjoiW3tcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiZjdiY2FiOTYtYjIyNC00OGVkLTliZTAtMGQyOTQ2YTA4OTVkXCIsXCJSb2xlUGFnZU5hbWVcIjpcInJvdXRlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYWQ2MGVkNzEtMTJjZC00NGU1LWJhMzAtZWU2YTI1MGMwODdlXCIsXCJSb2xlUGFnZU5hbWVcIjpcIkF0Y0NvZGVcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJhZWMzMzkwOC1lOGQ1LTQ3ZjUtOTBlMy1kMDcxZDZkMDk5YzdcIixcIlJvbGVQYWdlTmFtZVwiOlwiZ292ZXJub3JhdGVzXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiZjZjYTIzMzctNmNkMy00N2M0LTg2ZDYtNGI0MGMwODEzMjI4XCIsXCJSb2xlUGFnZU5hbWVcIjpcInN0cmF0dW1cIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCI5NjkxMDA2OC04NTE2LTRkYjktOWVjMy1lODZlNDE0NTJmMmNcIixcIlJvbGVQYWdlTmFtZVwiOlwiVXNlcnNcIixcIlJlYWRBbGxBY2Nlc3NcIjpmYWxzZSxcIlJlYWRPbmVBY2Nlc3NcIjpmYWxzZSxcIldyaXRlQWNjZXNzXCI6ZmFsc2UsXCJVcGRhdGVBY2Nlc3NcIjpmYWxzZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYzI4OTBjN2UtNzM0MS00Yzk0LWIyY2YtY2FhNTE1NTBkYzg4XCIsXCJSb2xlUGFnZU5hbWVcIjpcImNpdHlcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJhNGM0M2QyMC05MmRhLTQxYjktYjdlZC1jMzIyMjViNGFlN2NcIixcIlJvbGVQYWdlTmFtZVwiOlwic3RyYXR1bXR5cGVcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCI2MTQ1Nzc4NC03YmJhLTRlYTgtOWYwZS1iNGM1ODY2ZDVmNzlcIixcIlJvbGVQYWdlTmFtZVwiOlwiZHJ1Z3ByaWNpbmdcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCIxMzA3OTllNC03ZTI0LTRlZWQtOTQ5ZC1iMWIwODllYjgxYmZcIixcIlJvbGVQYWdlTmFtZVwiOlwiZHJ1Z2ltYWdlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiNGM5ODBhZTYtYzFjZi00MTVlLWFlNDktYWFiM2RjYjQxNGVlXCIsXCJSb2xlUGFnZU5hbWVcIjpcImNvbXBhbnl0eXBlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiZDdkZGMyMTktOTIzNy00ODZlLWJkZjYtYTg5MjU1MzNjNDUxXCIsXCJSb2xlUGFnZU5hbWVcIjpcImJyYW5kXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYTkxNzljNzYtYmFhMy00MjE0LTk0OTQtYTgwNTE2ZjcxODcyXCIsXCJSb2xlUGFnZU5hbWVcIjpcImNvbXBhbnlcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCI4MmM1NWE2Yi01ZmJlLTRiODYtYjg4MS1hNmNjNjI2NDk1OGJcIixcIlJvbGVQYWdlTmFtZVwiOlwiZGlzZWFzZWNhdGVnb3J5YXRjXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYzAzM2E2NWUtMzdlOS00NWUzLTg0NjAtYTM4ZjExMjU5YjlmXCIsXCJSb2xlUGFnZU5hbWVcIjpcImRpc2Vhc2VjYXRlZ29yeVwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjM2ZmE2YTAwLTk4MjQtNDlkZC05OWNmLTk0NjIzMTc5MGFiN1wiLFwiUm9sZVBhZ2VOYW1lXCI6XCJ3YXJlaG91c2VcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJiOWI2MDEzZi00YWUyLTRjMWQtOGJkYS05MDNjZWVjZmZjYWFcIixcIlJvbGVQYWdlTmFtZVwiOlwiY29udGFpbmVydHlwZVwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjZlZmVhNTM4LTA3MGMtNGUzMy04NGM0LWY3MTNiNWJmZDAwY1wiLFwiUm9sZVBhZ2VOYW1lXCI6XCJhdGNcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJiMzljZjc5Mi0wNTBmLTQwNmQtYTgyYy04ZDMwODdiZmE2MzVcIixcIlJvbGVQYWdlTmFtZVwiOlwidGhpcmRwYXJ0eVwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjgxNGE5YzY3LWQzN2YtNDExOC1hNzc0LThjZjIzZDk4NWNhMVwiLFwiUm9sZVBhZ2VOYW1lXCI6XCJkaXN0cmljdFwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjVhNTNmZGQzLTQwMjMtNDMxZS04YjhlLThiMzljZThiZjc0M1wiLFwiUm9sZVBhZ2VOYW1lXCI6XCJjdXJyZW5jeXJhdGVcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJiNWU2NjViZC0wNjA5LTQ4YTMtYjYzYy03NGFkNTg2NTE2MGNcIixcIlJvbGVQYWdlTmFtZVwiOlwiY3VycmVuY3lcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJlNmExZmQyNi1kMTYxLTQyMDUtYWI5Yi03MjdjYzAzNDBjMTVcIixcIlJvbGVQYWdlTmFtZVwiOlwidHJlYXRtZW50Y2F0ZWdvcmllc1wiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjU1M2ZmODg5LTFiMzctNDlkMS1iODQ2LTMzMmE0MWQyZGU5OVwiLFwiUm9sZVBhZ2VOYW1lXCI6XCJwcmVzZW50YXRpb250eXBlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiMTY1NDhkNzQtMjBkNy00MTllLTliZjMtMGNhMWVjZGU2MGVhXCIsXCJSb2xlUGFnZU5hbWVcIjpcImRydWdmb3JtcGFyZW50XCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiZTUyNzZlZWYtM2VhYy00ZmViLWIwYzEtMDM1ZWFiZTY2Y2EyXCIsXCJSb2xlUGFnZU5hbWVcIjpcImRvc2FnZXVuaXRcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCIxNGI0Y2Q2ZS1hYzZhLTQxYmQtYjcyZS02NDk3MTg0Yzg1NGRcIixcIlJvbGVQYWdlTmFtZVwiOlwiZHJ1Z2Zvcm1cIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCIzMjNiZWM3My1lOTFkLTRmODctYTg4YS1mOTY5ODhmOTcyZGZcIixcIlJvbGVQYWdlTmFtZVwiOlwiQ291bnRyeVwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjc0MDNlMzI0LTIyNGYtNDE1MS05NjQ2LTUwYWYyZjdlZGEzZVwiLFwiUm9sZVBhZ2VOYW1lXCI6XCJkcnVnbGFiZWxcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCI3MWEyZTI3YS02MDkxLTQxNDctYTdlNC00NmUyNmZlNDJkZGZcIixcIlJvbGVQYWdlTmFtZVwiOlwiZG9zYWdlXCIsXCJSZWFkQWxsQWNjZXNzXCI6dHJ1ZSxcIlJlYWRPbmVBY2Nlc3NcIjp0cnVlLFwiV3JpdGVBY2Nlc3NcIjp0cnVlLFwiVXBkYXRlQWNjZXNzXCI6dHJ1ZSxcIkNyZWF0ZWREYXRlXCI6XCIwMDAxLTAxLTAxVDAwOjAwOjAwXCJ9LHtcIkd1aWRcIjpcIjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMFwiLFwiUm9sZUd1aWRcIjpcIjE0NmU0MzlkLThlOGEtNGFjMS1hN2JjLTI2NGJhYTRkMDhlZlwiLFwiUm9sZU5hbWVcIjpcIk1PUEhcIixcIlJvbGVQYWdlR3VpZFwiOlwiYmFiMDA3MGYtOWQxYi00NTAyLTgwOGQtZWI4NjM3ZTRkYmFlXCIsXCJSb2xlUGFnZU5hbWVcIjpcImRydWdcIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn0se1wiR3VpZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJSb2xlR3VpZFwiOlwiMTQ2ZTQzOWQtOGU4YS00YWMxLWE3YmMtMjY0YmFhNGQwOGVmXCIsXCJSb2xlTmFtZVwiOlwiTU9QSFwiLFwiUm9sZVBhZ2VHdWlkXCI6XCJkY2E3ZjI0MC03MmQwLTQ5NGEtYWRiNS03Mzc5OWQ4ZTcxYmNcIixcIlJvbGVQYWdlTmFtZVwiOlwicHJlc2VudGF0aW9udW5pdFwiLFwiUmVhZEFsbEFjY2Vzc1wiOnRydWUsXCJSZWFkT25lQWNjZXNzXCI6dHJ1ZSxcIldyaXRlQWNjZXNzXCI6dHJ1ZSxcIlVwZGF0ZUFjY2Vzc1wiOnRydWUsXCJDcmVhdGVkRGF0ZVwiOlwiMDAwMS0wMS0wMVQwMDowMDowMFwifSx7XCJHdWlkXCI6XCIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDBcIixcIlJvbGVHdWlkXCI6XCIxNDZlNDM5ZC04ZThhLTRhYzEtYTdiYy0yNjRiYWE0ZDA4ZWZcIixcIlJvbGVOYW1lXCI6XCJNT1BIXCIsXCJSb2xlUGFnZUd1aWRcIjpcIjFhZmUwZWVmLTdiZTUtNGQzNS1hMWY4LWM5ODc1MmIzNDFlZlwiLFwiUm9sZVBhZ2VOYW1lXCI6XCJwcmVzZW50YXRpb25cIixcIlJlYWRBbGxBY2Nlc3NcIjp0cnVlLFwiUmVhZE9uZUFjY2Vzc1wiOnRydWUsXCJXcml0ZUFjY2Vzc1wiOnRydWUsXCJVcGRhdGVBY2Nlc3NcIjp0cnVlLFwiQ3JlYXRlZERhdGVcIjpcIjAwMDEtMDEtMDFUMDA6MDA6MDBcIn1dIiwibmJmIjoxNzA1Mzk4NjYwLCJleHAiOjE3MDU0MDk0NjAsImlhdCI6MTcwNTM5ODY2MH0.sCMUNgRY74kPXD2Ee7U5Cv_Qjsv-Td4LS4vsUiv9ohA",
        },
      };
      const response = await axios.post(
        "http://85.112.70.8:3010/api/atc/v1.0",
        {
          guid: newGuid,
          updatedDate: currentDate,
          createdBy: "Tonai",
          updatedBy: "Tonai",
          ...formData,
        },
        config
      );

      console.log("ATC data submitted successfully:", response.data);

      setFormData({
        code: "",
        levelName: "",
        levelNameAr: "",
        atcrelatedLabel: "",
        enabled: true,
      });

      toast.success("ATC data submitted successfully.");
    } catch (error) {
      // Check if the error is a validation error
      if (error.name === "ValidationError") {
        // Display validation errors using toast
        error.errors.forEach((validationError) => {
          toast.error(validationError);
        });
      } else {
        console.error("Error submitting ATC data:", error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="pt-14">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-md"
      >
        <label className="block mb-2">
          Code:
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          Level Name:
          <input
            type="text"
            name="levelName"
            value={formData.levelName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          Level Name (Arabic):
          <input
            type="text"
            name="levelNameAr"
            value={formData.levelNameAr}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2">
          ATC Related Label:
          <input
            type="text"
            name="atcrelatedLabel"
            value={formData.atcrelatedLabel}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="checkbox checkbox-secondary block mb-2">
          Enabled:
          <input
            type="checkbox"
            name="enabled"
            checked={formData.enabled}
            onChange={handleChange}
          />
        </label>

        <label className="hidden mb-2">
          Updated Date:
          <input
            hidden
            type="datetime-local"
            name="updatedDate"
            value={formData.updatedDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="hidden mb-2 ">
          Created By:
          <input
            hidden
            type="text"
            name="createdBy"
            value={formData.createdBy}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="hidden mb-2">
          Updated By:
          <input
            hidden
            type="text"
            name="updatedBy"
            value={formData.updatedBy}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>
        <div className="btn-cont flex w-full justify-end">
          <button type="submit" className="med-btn-pri mt-4 ">
            Submit
          </button>
        </div>
      </form>
      {/* Toast container for displaying messages */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ATCForm;
