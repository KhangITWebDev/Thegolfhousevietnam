import Cookies from "js-cookie";
import Swal from "sweetalert2";
import bookingClientAxios from "../../../clientAxios/bookingClientAxios";
import loginClientAxios from "../../../clientAxios/loginClientAxios";

const login = async (data) => {
  try {
    const resApi = await loginClientAxios.post("/user/login", {
      username: data.phone,
      password: data.password,
    });
    if (resApi) {
      if (resApi?.result?.message?.length > 0) {
        Swal.fire({
          text: `${resApi.result.message}`,
          icon: "error",
          showCancelButton: false,
          confirmButtonText: "OK",
        });
      } else if (resApi?.result) {
        Cookies.set("access_token", resApi?.result?.access_token);
        Cookies.set("trainee_id", resApi?.result?.id);
      }
      return {
        success: true,
        data: resApi,
      };
    }
    return {
      success: false,
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: null,
    };
  }
};

const getLocationApi = async () => {
  try {
    const resApi = await bookingClientAxios.get(
      `/restapi/1.0/object/academy.location`
    );
    if (resApi) {
      return {
        success: true,
        data: resApi,
      };
    }
    return {
      success: false,
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: null,
    };
  }
};
const getRegistrationApi = async () => {
  const traineeId = Number(Cookies.get("trainee_id"));
  try {
    const resApi = await bookingClientAxios.get(
      `/restapi/1.0/object/academy.registration?domain=[('state','=','running'),('trainee_id.user_id', '=',${traineeId} )]&order="expected_start_date"&limit=1`
    );
    if (resApi)
      return {
        success: true,
        data: resApi,
      };
    return {
      success: false,
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: null,
    };
  }
};
const getScheduleApi = async () => {
  const locationId = Number(Cookies.get("location_id"));
  const programId = Number(Cookies.get("program_id"));
  try {
    const resApi = await bookingClientAxios.get(
      `/restapi/1.0/object/academy.schedule.booking?domain=[('date_start','>=','2023-01-16 16:00:00'),('date_start','<=','2023-01-20 23:59:59'),('schedule_id.location_id.id','=',${locationId}),('program_id','=',${programId})]`
    );
    if (resApi)
      return {
        success: true,
        data: resApi,
      };
    return {
      success: false,
      data: null,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: null,
    };
  }
};
const BookingApi = {
  login,
  getLocationApi,
  getRegistrationApi,
  getScheduleApi,
};
export default BookingApi;
