import React, {useState} from "react";
import "./App.css";
import data from "./data.json";


const App = () => {
  
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    nim:"",
    fullName: "",
    address: "",
    gender: "",
    hobby:"",
    notes:""
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

  }; 


  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      nim: addFormData.nim,
      fullName: addFormData.fullName,
      address: addFormData.address,
      gender: addFormData.gender,
      hobby: addFormData.hobby,
      notes: addFormData.notes
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

    return (
      <div className="app-container">
        <h1>TEAM 2 - DATA MAHASISWA</h1>
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Jenis Kelamin</th>
              <th>Hobi</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact)=> 
              <tr>
              <td>{contact.nim}</td>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.gender}</td>
              <td>{contact.hobby}</td>
              <td>{contact.notes}</td>
            </tr>
            )}
            
          </tbody>
        </table>
        
        <h2>Tambah Mahasiswa</h2>
        <form onSubmit={handleAddFormSubmit}>
        <div class="form-group row">
          <div class="col-sm-10">
            <input 
            type="text" 
            class="form-control" 
            name="nim" 
            placeholder="Masukkan NIM"
            onChange={handleAddFormChange}
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <input 
            type="text" 
            class="form-control" 
            name="fullName" 
            placeholder="Masukkan Nama"
            onChange={handleAddFormChange}
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <input 
            type="text" 
            class="form-control" 
            name="address" 
            placeholder="Masukkan Alamat"
            onChange={handleAddFormChange}
            />
          </div>
        </div>
        <fieldset class="form-group">
          <div class="row">
            <div class="col-sm-10">
            <legend class="col-form-label col-sm-2 pt-0">Jenis Kelamin</legend>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" value="Perempuan" onChange={handleAddFormChange}/>
                <label class="form-check-label" for="gridRadios2">
                  Perempuan
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gender" value="Laki - Laki" onChange={handleAddFormChange}/>
                <label class="form-check-label" for="gridRadios2">
                  Laki - Laki
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="form-group row">
          <div class="col-sm-2">Hobi</div>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="hobby" value="Berenang" onChange={handleAddFormChange}/>
              <label class="form-check-label" for="gridCheck1">
                Berenang
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="hobby" value="Membaca" onChange={handleAddFormChange} />
              <label class="form-check-label" for="gridCheck1">
                Membaca
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" name="hobby" value="Menulis" onChange={handleAddFormChange} />
              <label class="form-check-label" for="gridCheck1">
                Menulis
              </label>
            </div>
          </div>
        </div>
        <textarea 
        class="form-control" 
        rows="3"
        name="notes"
        required="required"
        onChange={handleAddFormChange}
        />
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Tambahkan</button>
          </div>
        </div>
      </form>
  
      </div>


    );
    
  
}

export default App;
