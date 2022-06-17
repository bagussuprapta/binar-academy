import { useEffect, useState } from "react";
import FilterCar from "./FilterCar";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

const Filter = () => {
  const [type, setType] = useState("Pilih Tipe Driver");
  const [date, setDate] = useState("Pilih Waktu");
  const [pickupTime, setPickupTime] = useState("8");
  const [passenger, setPassenger] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type !== "Pilih Tipe Driver") {
      const pass = passenger ? passenger : "0";
      const filter = { type, date, pickupTime, pass };
      dispatch(fetchUsers(filter));
    }
  };

  const handleType = (e) => {
    setType(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handlePickupTime = (e) => {
    setPickupTime(e.target.value);
  };
  const handlePassenger = (e) => {
    setPassenger(e.target.value);
  };

  useEffect(() => {
    console.log(state.cars);
  }, [state]);

  return (
    <>
      <div className="container filter filter-container">
        <h6 className="fw-bold"></h6>
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3 my-1">
              <label htmlFor="typeDriver">Tipe Driver</label>
              <br />
              <select value={type} required onChange={handleType} className="form-select type" name="typeDriver" id="typeDriver">
                <option disabled hidden>
                  Pilih Tipe Driver
                </option>
                <option value="Dengan Sopir">Dengan Sopir</option>
                <option value="Keyless Entry">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
            <div className="col-lg-3 my-1">
              <label htmlFor="date">Pilih Tanggal</label>
              <br />
              <input className="form-control" onChange={handleDate} required type="date" name="date" id="date" />
            </div>
            <div className="col-lg-2 my-1">
              <label htmlFor="time">Waktu Ambil</label>
              <br />
              <select value={pickupTime} onChange={handlePickupTime} className="form-select time" name="time" id="time">
                <option value="8">08.00 WIB</option>
                <option value="9">09.00 WIB</option>
                <option value="10">10.00 WIB</option>
                <option value="11">11.00 WIB</option>
                <option value="12">12.00 WIB</option>
              </select>
            </div>
            <div className="col-lg-2 my-1">
              <label htmlFor="passenger">Penumpang</label>
              <br />
              <input value={passenger} onChange={handlePassenger} className="form-control" type="text" name="passenger" id="passenger" />
            </div>
            <div className="col-lg-2 my-1 d-flex flex-column justify-content-center">
              <p></p>
              <button className="btn btn-regis submit">Cari Mobil</button>
            </div>
          </div>
        </form>
      </div>
      {state.cars && <FilterCar cars={state.cars} />}
    </>
  );
};

export default Filter;
