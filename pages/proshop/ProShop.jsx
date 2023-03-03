import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import { Loader, RangeSlider } from "rsuite";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getBannerData } from "../../store/redux/Banner/banner.action";
import { getContentData } from "../../store/redux/LoadContentReducer/content.action";
import { getProshopData } from "../../store/redux/ProshopReducer/proshop.action";
import { removeAccents } from "../../utils/function";
import { usePagination } from "../../utils/usePagination";
import { default as Pagination2 } from "../../components/pagination/pagination";
import styles from "./ProShop.module.scss";
import $ from "jquery";
import { Dropdown, DropdownButton } from "react-bootstrap";
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: 18,
    color: state.isSelected ? "#fff" : "#000",
    cursor: "pointer",
    backgroundColor: state.isSelected ? "#00B577" : "transparent",
    zIndex: 3000,
    position: "relative",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#000",
    fontSize: 18,
    fontWeight: 700,
    margin: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#000",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  valueContainer: (provided, state) => ({
    ...provided,
    paddingLeft: 0,
    paddingRight: 0,
    zIndex: 3000,
  }),
  container: (provided, state) => ({
    ...provided,
    width: 130,
    zIndex: 5000,
    "@media screen and (max-width: 576px)": {
      width: "100%",
    },
  }),
  input: (base, state) => ({
    ...base,
    color: "#000",
    fontSize: 18,
    fontWeight: 700,
    margin: 0,
  }),
  control: (base, state) => ({
    ...base,
    backgroundColor: "tranparent",
    cursor: "pointer",
    color: "#000",
    "@media screen and (max-width: 480px)": {
      padding: 0,
    },
    border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0,
    },
  }),
};

const options = [
  { value: "1", label: "Mới nhất" },
  { value: "2", label: "Cũ nhất" },
  { value: "3", label: "Giá cao nhất" },
  { value: "4", label: "Giá thấp nhất" },
];
const Filter1 = [
  {
    value: "gen3",
    label: "Unisex",
  },
  {
    value: "gen1",
    label: "Nam",
  },
  {
    value: "gen2",
    label: "Nữ",
  },
  {
    value: "gen4",
    label: "Bé trai",
  },
  {
    value: "gen5",
    label: "Bé gái",
  },
  {
    value: "gen6",
    label: "Trẻ em",
  },
];
const Size = [
  {
    value: "size1",
    label: "XS",
  },
  {
    value: "size2",
    label: "S",
  },
  {
    value: "size3",
    label: "M",
  },
  {
    value: "size4",
    label: "L",
  },
];
const price = [
  {
    value: "price1",
    label: "Dưới 1.000.000 đ",
  },
  {
    value: "price2",
    label: "1.000.000 đ - 4.999.999 đ",
  },
  {
    value: "price3",
    label: "5.000.000 đ - 10.000.000 đ",
  },
  {
    value: "price4",
    label: "Trên 10.000.000 đ",
  },
];
const brand = [
  {
    value: "brand1",
    label: "Nike",
  },
  {
    value: "brand2",
    label: "Addidas",
  },
  {
    value: "brand3",
    label: "Hazzy",
  },
];
function ProShop(props) {
  const [value, setValue] = React.useState([0, 1]);
  const [typeFilter, setTypeFilter] = useState("");
  const [hiddenFilter, setHiddenFilter] = useState(false);
  const [showFilter1, setShowFilter1] = useState(true);
  const [showFilter2, setShowFilter2] = useState(true);
  const [showFilter3, setShowFilter3] = useState(true);
  const [showFilter4, setShowFilter4] = useState(true);
  const [showFilter5, setShowFilter5] = useState(true);
  const proshopData = useSelector((state) => state.ProshopReducer.proshopList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProshopData());
    dispatch(getBannerData());
    dispatch(getContentData());
  }, []);
  const { banners } = useSelector((state) => state.BannerReducer);
  const { contents } = useSelector((state) => state.ContentReducer);
  const bannerProshop = banners.filter(
    (item) => item.danh_muc === "Slide Proshop"
  );
  const router = useRouter();
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <i
          className="fa-solid fa-chevron-down"
          style={{
            fontSize: 16,
            color: "#5F5F5F",
          }}
        ></i>
      </components.DropdownIndicator>
    );
  };
  const coast = proshopData.filter((x) =>
    x.ten_vt?.toLowerCase()?.includes("áo")
  );
  const trousers = proshopData.filter((x) =>
    x.ten_vt?.toLowerCase()?.includes("quần")
  );
  const skirt = proshopData.filter((x) =>
    x.ten_vt?.toLowerCase()?.includes("váy")
  );
  const glove = proshopData.filter(
    (x) =>
      x.ten_vt?.toLowerCase()?.includes("găng") ||
      x.ten_vt?.toLowerCase()?.includes("glove")
  );
  const shose = proshopData.filter((x) =>
    x.ten_vt?.toLowerCase()?.includes("giày")
  );
  const trangphuc = proshopData.filter((x) =>
    x.ten_vt?.toLowerCase()?.includes("trang phục")
  );
  const fullset = proshopData.filter((x) =>
    x.ten_vt?.toLowerCase()?.includes("full")
  );
  const hat = proshopData.filter((x) =>
    x.ten_vt?.toLowerCase()?.includes("nón")
  );
  const data = usePagination(proshopData, 6);
  const filter = (type) => {
    data.setCurrentPage(1);
    switch (type) {
      case "Váy": {
        data.setPerData(skirt);
        break;
      }
      case "Áo": {
        data.setPerData(coast);
        break;
      }
      case "Quần": {
        data.setPerData(trousers);
        break;
      }
      case "Găng bọc": {
        data.setPerData(gloveWrap);
        break;
      }
      case "Găng tay": {
        data.setPerData(glove);
        break;
      }
      case "Giày": {
        data.setPerData(shose);
        break;
      }
      case "Nón": {
        data.setPerData(hat);
        break;
      }
      case "Trang phục": {
        data.setPerData(trangphuc);
        break;
      }
      case "Full": {
        data.setPerData(fullset);
        break;
      }
      default: {
        data.setPerData(proshopData);
        break;
      }
    }
  };
  const handleSearchInput = (e) => {
    const value = e.target.value;
    const dataSearch = proshopData.filter((x) =>
      removeAccents(x.ten_vt)
        .toLowerCase()
        .includes(removeAccents(value).toLowerCase())
    );
    if (value !== "") {
      data.setPerData(dataSearch);
      data.setCurrentPage(1);
    } else {
      data.setPerData(proshopData);
      data.setCurrentPage(1);
    }
  };
  const sort = (value) => {
    data.setCurrentPage(1);
    switch (value) {
      case "1": {
        const Newest = [...proshopData].sort(
          (a, b) => new Date(b.date_created) - new Date(a.date_created)
        );
        data.setPerData(Newest);
        break;
      }
      case "2": {
        const lostest = [...proshopData].sort(
          (a, b) => new Date(a.date_created) - new Date(b.date_created)
        );
        data.setPerData(lostest);
        break;
      }
      case "3": {
        const Newest = [...proshopData].sort(
          (a, b) => b.gia_ban_le - a.gia_ban_le
        );
        data.setPerData(Newest);
        break;
      }
      case "4": {
        const price = [...proshopData].sort(
          (a, b) => a.gia_ban_le - b.gia_ban_le
        );
        data.setPerData(price);
        break;
      }
      default:
        break;
    }
  };
  const sectiontitle = contents.filter(
    (item) => item.category === "63bc4b5739d2a23b06d91f9e"
  );
  function ToogleFilter1() {
    setShowFilter1(!showFilter1);
    var growDiv = document.getElementById("grow");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".wr");
      growDiv.style.height = 310 + "px";
    }
  }
  useEffect(() => {
    if (showFilter1) {
      document.getElementById("grow").style.height = 310 + "px";
    }
    if (showFilter2) {
      document.getElementById("grow2").style.height =
        document.querySelector(".wr2")?.clientHeight + "px";
    }
    if (showFilter3) {
      document.getElementById("grow3").style.height =
        document.querySelector(".wr3")?.clientHeight + "px";
    }
    if (showFilter4) {
      document.getElementById("grow4").style.height =
        document.querySelector(".wr4")?.clientHeight + "px";
    }
    if (showFilter5) {
      document.getElementById("grow5").style.height =
        document.querySelector(".wr5")?.clientHeight + "px";
    }
  }, []);
  function ToogleFilter2() {
    setShowFilter2(!showFilter2);
    var growDiv = document.getElementById("grow2");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".wr2");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }
  function ToogleFilter3() {
    setShowFilter3(!showFilter3);
    var growDiv = document.getElementById("grow3");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".wr3");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }
  function ToogleFilter4() {
    setShowFilter4(!showFilter4);
    var growDiv = document.getElementById("grow4");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".wr4");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }
  function ToogleFilter5() {
    setShowFilter5(!showFilter5);
    var growDiv = document.getElementById("grow5");
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = document.querySelector(".wr5");
      growDiv.style.height = wrapper.clientHeight + "px";
    }
  }
  var wrapper = document.querySelector("#product");
  const [swiper, setSwiper] = React.useState(null);
  $("input:checkbox").on("click", function () {
    var $box = $(this);
    if ($box.is(":checked")) {
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });
  const pictureArray = (data) => {
    let arr = [];
    if (data?.picture) {
      arr.push({
        id: 1,
        url: data.picture,
      });
    }
    if (data?.picture2) {
      arr.push({
        id: 2,
        url: data.picture2,
      });
    }
    if (data?.picture3) {
      arr.push({
        id: 3,
        url: data.picture3,
      });
    }
    if (data?.picture4) {
      arr.push({
        id: 4,
        url: data.picture4,
      });
    }
    return arr;
  };
  const filterarr = {
    ten_sp: "",
    danh_muc: "",
    gioi_tinh: "",
    kich_co: "",
    muc_gia_min: 0,
    muc_gia_max: 1000000000,
    thuong_hieu: "",
  };
  const filterPrice = (e) => {
    const { value } = e.target;
    data.setCurrentPage(1);
    switch (value) {
      case "price1": {
        if (e.target.name === "price" && e.target.checked) {
          filterarr.muc_gia_max = 1000000;
        }
        if (e.target.name === "price" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "price2": {
        if (e.target.name === "price" && e.target.checked) {
          filterarr.muc_gia_max = 5000000;
          filterarr.muc_gia_min = 1000000;
        }
        if (e.target.name === "price" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "price3": {
        if (e.target.name === "price" && e.target.checked) {
          filterarr.muc_gia_max = 10000000;
          filterarr.muc_gia_min = 5000000;
        }
        if (e.target.name === "price" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "price4": {
        if (e.target.name === "price" && e.target.checked) {
          filterarr.muc_gia_min = 10000000;
        }
        if (e.target.name === "price" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "gen1": {
        if (e.target.name === "gen" && e.target.checked) {
          filterarr.gioi_tinh = "nam";
        }
        if (e.target.name === "gen" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "gen2": {
        if (e.target.name === "gen" && e.target.checked) {
          filterarr.gioi_tinh = "nữ";
        }
        if (e.target.name === "gen" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "gen3": {
        if (e.target.name === "gen" && e.target.checked) {
          filterarr.gioi_tinh = "nam";
        }
        if (e.target.name === "gen" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "gen4": {
        if (e.target.name === "gen" && e.target.checked) {
          filterarr.gioi_tinh = "bé trai";
        }
        if (e.target.name === "gen" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "gen5": {
        if (e.target.name === "gen" && e.target.checked) {
          filterarr.gioi_tinh = "bé gái";
        }
        if (e.target.name === "gen" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "gen6": {
        if (e.target.name === "gen" && e.target.checked) {
          filterarr.gioi_tinh = "trẻ em";
        }
        if (e.target.name === "gen" && !e.target.checked) {
          filterarr.gioi_tinh = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "size1": {
        if (e.target.name === "size" && e.target.checked) {
          filterarr.kich_co = "size xs";
        }
        if (e.target.name === "size" && !e.target.checked) {
          filterarr.kich_co = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "size2": {
        if (e.target.name === "size" && e.target.checked) {
          filterarr.kich_co = "size s";
        }
        if (e.target.name === "size" && !e.target.checked) {
          filterarr.kich_co = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "size3": {
        if (e.target.name === "size" && e.target.checked) {
          filterarr.kich_co = "size m";
        }
        if (e.target.name === "size" && !e.target.checked) {
          filterarr.kich_co = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "size4": {
        if (e.target.name === "size" && e.target.checked) {
          filterarr.kich_co = "size l";
        }
        if (e.target.name === "size" && !e.target.checked) {
          filterarr.kich_co = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "brand1": {
        if (e.target.name === "brand" && e.target.checked) {
          filterarr.thuong_hieu = "nike";
        }
        if (e.target.name === "brand" && !e.target.checked) {
          filterarr.kich_co = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "brand2": {
        if (e.target.name === "brand" && e.target.checked) {
          filterarr.thuong_hieu = "addidas";
        }
        if (e.target.name === "brand" && !e.target.checked) {
          filterarr.kich_co = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      case "brand3": {
        if (e.target.name === "brand" && e.target.checked) {
          filterarr.thuong_hieu = "hazzy";
        }
        if (e.target.name === "brand" && !e.target.checked) {
          filterarr.kich_co = "";
        }
        const Newest = proshopData.filter((item) => {
          return (
            item.ten_vt.toLowerCase().includes(filterarr.ten_sp) &&
            item.ten_vt.toLowerCase().includes(filterarr.gioi_tinh) &&
            item.ten_vt.toLowerCase().includes(filterarr.danh_muc) &&
            item.ten_vt.toLowerCase().includes(filterarr.kich_co) &&
            item.ten_vt.toLowerCase().includes(filterarr.thuong_hieu) &&
            item.gia_ban_le > filterarr.muc_gia_min &&
            item.gia_ban_le < filterarr.muc_gia_max
          );
        });
        data.setPerData(Newest);
        break;
      }
      default:
        break;
    }
    console.log(filterarr);
  };
  const [activeKey, setActiveKey] = React.useState(-1);
  const [showInfo2, setShowInfo2] = useState(-1);
  const [url, setUrl] = useState();
  return (
    <div className={styles.proshop_page}>
      <div className={styles.banner} id="banner" data-aos="fade-right">
        <Swiper
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          onSwiper={(s) => {
            setSwiper(s);
          }}
        >
          {bannerProshop.slice(0, 4).map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.image_container}>
                <Image
                  loader={({ src }) =>
                    `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                  }
                  alt={"Image"}
                  src={item.hinh_anh}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="content">
                  <div className="container h-100">
                    <div className="d-flex h-100 justify-content-center align-items-center flex-column">
                      <h1 data-aos="fade-right">{item.tieu_de}</h1>
                      <div
                        data-aos="fade-right"
                        dangerouslySetInnerHTML={{
                          __html: item.mo_ta,
                        }}
                      ></div>
                      {item.link.length > 0 && (
                        <div className="button w-100 d-flex justify-content-center">
                          <button
                            data-aos="fade-right"
                            onClick={(e) =>
                              item.link.length > 0 && item.link != ""
                                ? !item.cua_so_moi
                                  ? router.push(item.link)
                                  : window.open(item.link)
                                : ""
                            }
                          >
                            {item.action}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <button className="btn-prev" onClick={() => swiper.slidePrev()}>
            <i className="fa-thin fa-arrow-left"></i>
          </button>
          <button className="btn-next" onClick={() => swiper.slideNext()}>
            <i className="fa-thin fa-arrow-right"></i>
          </button>
        </Swiper>
      </div>
      <div className="container">
        <div
          className={
            "d-flex flex-wrap align-items-start" + " " + styles.content
          }
          id="pro-shop"
        >
          <div
            className={"col-12 col-lg-3" + " " + styles.left}
            style={{
              display: hiddenFilter && "none",
            }}
          >
            <div
              className={styles.tabs}
              style={{
                height: 955,
              }}
            >
              <div className={"d-flex flex-wrap" + " " + styles.center}>
                <div
                  className={
                    "col-12 col-lg-12 col-md-6" + " " + styles.center_item
                  }
                >
                  {/* <h5
                    className="w-100 d-flex justify-content-between align-items-center"
                    onClick={() => {
                      ToogleFilter1();
                    }}
                  >
                    Danh mục
                    {showFilter1 ? (
                      <i className="fa-solid fa-caret-up"></i>
                    ) : (
                      <i className="fa-solid fa-caret-down"></i>
                    )}
                  </h5> */}
                  <div id="grow">
                    <ul className={styles.item_content + " " + "wr"}>
                      <li onClick={() => filter("Full")}>Full set </li>
                      <li onClick={() => filter("Áo")}>Áo</li>
                      <li onClick={() => filter("Quần")}>Quần</li>
                      <li onClick={() => filter("Váy")}>Váy</li>
                      <li onClick={() => filter("Giày")}>Giày</li>
                      <li onClick={() => filter("Găng")}>Găng</li>
                      <li onClick={() => filter("Nón")}>Nón</li>
                      <li onClick={() => filter("Trang phục")}>Trang phục</li>
                    </ul>
                  </div>
                </div>
                <div
                  className={
                    "col-12 col-lg-12 col-md-6" + " " + styles.center_item
                  }
                >
                  <h5
                    className="w-100 d-flex justify-content-between align-items-center"
                    onClick={() => {
                      ToogleFilter2();
                    }}
                  >
                    Giới tính
                    {showFilter2 ? (
                      <i className="fa-regular fa-chevron-up"></i>
                    ) : (
                      <i className="fa-regular fa-chevron-down"></i>
                    )}
                  </h5>
                  <div id="grow2">
                    <div
                      className={
                        styles.item_content + " " + "d-flex flex-column wr2"
                      }
                    >
                      {Filter1.map((item, index) => (
                        <label htmlFor={item.value} key={index}>
                          <input
                            type="checkbox"
                            id={item.value}
                            value={item.value}
                            name="gen"
                            onClick={(e) => filterPrice(e)}
                          />
                          <span className={styles.checkmark}></span>
                          <div className={styles.title}>{item.label}</div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "col-12 col-lg-12 col-md-6" + " " + styles.center_item
                  }
                >
                  <h5
                    className="w-100 d-flex justify-content-between align-items-center"
                    onClick={() => {
                      ToogleFilter3();
                    }}
                  >
                    Kích cỡ
                    {showFilter3 ? (
                      <i className="fa-regular fa-chevron-up"></i>
                    ) : (
                      <i className="fa-regular fa-chevron-down"></i>
                    )}
                  </h5>
                  <div id="grow3">
                    <div
                      className={
                        styles.item_content + " " + "d-flex flex-column wr3"
                      }
                    >
                      {Size.map((item, index) => (
                        <label htmlFor={item.value} key={index}>
                          <input
                            type="checkbox"
                            id={item.value}
                            value={item.value}
                            name="size"
                            onClick={(e) => filterPrice(e)}
                          />
                          <span className={styles.checkmark}></span>
                          <div className={styles.title}>{item.label}</div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "col-12 col-lg-12 col-md-6" + " " + styles.center_item
                  }
                >
                  <h5
                    className="w-100 d-flex justify-content-between align-items-center"
                    onClick={() => {
                      ToogleFilter4();
                    }}
                  >
                    Mức giá
                    {showFilter4 ? (
                      <i className="fa-regular fa-chevron-up"></i>
                    ) : (
                      <i className="fa-regular fa-chevron-down"></i>
                    )}
                  </h5>
                  <div id="grow4">
                    <div
                      className={
                        styles.item_content + " " + "d-flex flex-column wr4"
                      }
                    >
                      {price.map((item, index) => (
                        <label htmlFor={item.value} key={index}>
                          <input
                            type="checkbox"
                            id={item.value}
                            value={item.value}
                            name="price"
                            onClick={(e) => filterPrice(e)}
                          />
                          <span className={styles.checkmark}></span>
                          <div className={styles.title}>{item.label}</div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "col-12 col-lg-12 col-md-6" + " " + styles.center_item
                  }
                >
                  <h5
                    className="w-100 d-flex justify-content-between align-items-center"
                    onClick={() => {
                      ToogleFilter5();
                    }}
                  >
                    Thương hiệu
                    {showFilter5 ? (
                      <i className="fa-regular fa-chevron-up"></i>
                    ) : (
                      <i className="fa-regular fa-chevron-down"></i>
                    )}
                  </h5>
                  <div id="grow5">
                    <div
                      className={
                        styles.item_content + " " + "d-flex flex-column wr5"
                      }
                    >
                      {brand.map((item, index) => (
                        <label htmlFor={item.value} key={index}>
                          <input
                            type="checkbox"
                            id={item.value}
                            value={item.value}
                            name="brand"
                            onClick={(e) => filterPrice(e)}
                          />
                          <span className={styles.checkmark}></span>
                          <div className={styles.title}>{item.label}</div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              hiddenFilter ? "col-12" : "col-12 col-lg-9" + " " + styles.right
            }
            // data-aos="fade-right"
            id="product"
          >
            <div
              className={
                "d-flex flex-wrap justify-content-between align-items-center" +
                " " +
                styles.header
              }
            >
              <span className="col-12 col-sm-8">
                <div className="form-group">
                  <div className="input-group">
                    <div className="icon">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Tìm sản phẩm ..."
                      className="form-control"
                      onChange={(e) => {
                        handleSearchInput(e);
                      }}
                    />
                  </div>
                </div>
              </span>
              <div
                className="col-12 col-sm-4 d-flex align-items-center justify-content-start justify-content-sm-end"
                data-aos="fade-left"
              >
                <span
                  className={styles.hiddenFilter}
                  onClick={() => setHiddenFilter(!hiddenFilter)}
                >
                  {hiddenFilter ? "Hiện bộ lọc" : "Ẩn bộ lọc"}
                  <i className="fa-sharp fa-regular fa-arrow-right-arrow-left"></i>
                </span>
                <div className="fiter-select">
                  <DropdownButton
                    id="dropdown-item-button"
                    title="Lọc theo"
                    align="end"
                  >
                    <Dropdown.Item
                      eventKey="1"
                      as="button"
                      onClick={() => {
                        setActiveKey(1);
                        sort("2");
                      }}
                      active={activeKey === 1 ? true : false}
                    >
                      Cũ nhất
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="2"
                      as="button"
                      onClick={() => {
                        setActiveKey(2);
                        sort("1");
                      }}
                      active={activeKey === 2 ? true : false}
                    >
                      Mới nhất
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="3"
                      as="button"
                      onClick={() => {
                        setActiveKey(3);
                        sort("3");
                      }}
                      active={activeKey === 3 ? true : false}
                    >
                      Giá: Cao nhất
                    </Dropdown.Item>
                    <Dropdown.Item
                      eventKey="4"
                      as="button"
                      onClick={() => {
                        setActiveKey(4);
                        sort("4");
                      }}
                      active={activeKey === 4 ? true : false}
                    >
                      Giá: Thấp nhất
                    </Dropdown.Item>
                  </DropdownButton>
                  <i className="fa-regular fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className={"d-flex flex-wrap" + " " + styles.product}>
              {proshopData.length <= 0 ? (
                <div className="d-flex m-auto">
                  <Loader size="md" content="Đang tải dữ liệu..." />
                </div>
              ) : (
                data.currentDatas.map((item, index) => (
                  <div
                    key={index}
                    className={"col-12 col-sm-6 col-lg-4" + " " + styles.item}
                    onMouseEnter={() => {
                      setShowInfo2(index);
                    }}
                    onMouseLeave={() => {
                      setShowInfo2(-1);
                      setUrl();
                      pictureArray({});
                    }}
                  >
                    <div className={styles.info + " " + "d-flex flex-column"}>
                      {showInfo2 === index ? (
                        <>
                          <div
                            className={styles.image}
                            style={{ zIndex: -1, position: "relative" }}
                            onClick={() =>
                              router.push(
                                `/proshop/${removeAccents(item.ten_vt)}`
                              )
                            }
                          >
                            {url ? (
                              <Image
                                alt={"Image" + index + 1}
                                src={url}
                                loader={({ src }) =>
                                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                                }
                                width={300}
                                height={300}
                                objectFit={"cover"}
                              ></Image>
                            ) : item.picture ? (
                              <Image
                                alt={"Image" + index + 1}
                                loader={({ src }) =>
                                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                                }
                                src={item.picture}
                                width={300}
                                height={300}
                                objectFit={"cover"}
                              ></Image>
                            ) : (
                              <Image
                                alt={"Image" + index + 1}
                                src="/images/Logo/logo2.png"
                                width={300}
                                height={300}
                                objectFit={"cover"}
                              />
                            )}
                          </div>
                          <div className="d-flex" id="product-info">
                            <Swiper
                              breakpoints={{
                                1200: {
                                  slidesPerView: 3,
                                },
                                992: {
                                  slidesPerView: 3,
                                },
                                576: {
                                  slidesPerView: 3,
                                },
                              }}
                              spaceBetween={30}
                              slidesPerView={1}
                              navigation={true}
                              modules={[Pagination, Navigation, Navigation]}
                              className="mySwiper"
                            >
                              {pictureArray(item)?.map((item, index) => (
                                <SwiperSlide key={index}>
                                  <div
                                    className="image"
                                    onMouseEnter={() => setUrl(item.url)}
                                  >
                                    <Image
                                      alt={"Image" + index + 1}
                                      src={item.url}
                                      loader={({ src }) =>
                                        `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                                      }
                                      layout="fill"
                                      objectFit={"cover"}
                                    ></Image>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                          <div
                            onClick={() =>
                              router.push(
                                `/proshop/${removeAccents(item.ten_vt)}`
                              )
                            }
                          >
                            <p>{item.gia_ban_le.toLocaleString("vi-VI")} VND</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={styles.image}
                            style={{ zIndex: -1 }}
                            onClick={() =>
                              router.push(
                                `/proshop/${removeAccents(item.ten_vt)}`
                              )
                            }
                          >
                            {item.picture ? (
                              <Image
                                alt={"Image" + index + 1}
                                loader={({ src }) =>
                                  `https://api.fostech.vn${src}?access_token=7d7fea98483f31af4ac3cdd9db2e4a93`
                                }
                                src={item.picture}
                                width={300}
                                height={300}
                                objectFit={"cover"}
                              ></Image>
                            ) : (
                              <Image
                                alt={"Image" + index + 1}
                                src="/images/Logo/logo2.png"
                                width={300}
                                height={300}
                                objectFit={"cover"}
                              />
                            )}
                          </div>
                          <div
                            onClick={() =>
                              router.push(
                                `/proshop/${removeAccents(item.ten_vt)}`
                              )
                            }
                          >
                            <h5>{item.ten_vt}</h5>
                            <p>{item.gia_ban_le.toLocaleString("vi-VI")} VND</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="d-flex justify-content-center">
              <Pagination2 data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProShop;
