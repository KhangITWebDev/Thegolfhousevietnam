import Cookies from "js-cookie";
import Swal from "sweetalert2";
import bookingClientAxios from "../../../clientAxios/bookingClientAxios";
import loginClientAxios from "../../../clientAxios/loginClientAxios";
import { generateDatabaseDateTime } from "../../../utils/function";

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
  const userId = Number(Cookies.get("user_id"));
  try {
    const resApi = await bookingClientAxios.get(
      `/restapi/1.0/object/academy.registration?domain=[('state','=','running'),('trainee_id.user_id', '=',${userId} )]&order="expected_start_date"&limit=1`
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
  const startDate = generateDatabaseDateTime(new Date()).now;
  const endDate = "2023-12-31 23:59:59";
  try {
    const resApi = await bookingClientAxios.get(
      `/restapi/1.0/object/academy.schedule.booking?domain=[('date_start','>=','${startDate}'),('date_start','<=','${endDate}'),('schedule_id.location_id.id','=',${locationId}),('program_id','=',${programId})]`
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
const postScheduleApi = async (value) => {
  const locationId = Number(Cookies.get("location_id"));
  const locationDetailID = Number(Cookies.get("location_detail_id"));
  const traineeId = Number(Cookies.get("trainee_id"));
  try {
    const resApi = await bookingClientAxios.post(
      `/restapi/1.0/object/academy.booking?vals={'location_id':${locationId},'location_detail_id':${locationDetailID},'trainee_id':${traineeId},'course_id':${value.course_id[0]},'num_of_lession':'','trainer_id':${value.trainer_id[0]},'date':${value.date},'start_time':${value.start_time},'end_time':${value.end_time},'status':'pending','schedule_booking_id':${value.schedule_id[0]}}`
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
const getBookingListApi = async () => {
  const traineeId = Number(Cookies.get("trainee_id"));
  try {
    const resApi = await bookingClientAxios.get(
      `/restapi/1.0/object/academy.booking?domain=[('trainee_id.id','=','${traineeId}')]`
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
const CancelBooking = async (id) => {
  try {
    const resApi = await bookingClientAxios.put(
      `/restapi/1.0/object/academy.booking/${id}?vals={'status':'cancel'}`
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
  postScheduleApi,
  getBookingListApi,
  CancelBooking,
};
export default BookingApi;
