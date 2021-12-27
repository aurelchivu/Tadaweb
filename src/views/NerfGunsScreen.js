import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Gun from '../components/Gun';
import useFetch from '../utils/useFetch';

const NerfGunsScreen = () => {
  const params = useParams();
  const navigate = useNavigate();

  const pageNumber = params.pageNumber || 1;
  const pageSizes = [4, 8, 20, 50];
  const [pageSize, setPageSize] = useState(pageSizes[3]);
  const [deleted, setDeleted] = useState(false);

  const { data, pages } = useFetch(
    'http://localhost:8000/guns',
    pageNumber,
    pageSize
  );

  const deleteAll = async (id) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };
      const data = await axios.delete(
        `http://localhost:8000/guns/${id}`,
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    data.forEach((item, idx) => {
      deleteAll(item.id);
      if ((idx = data.length - 1)) {
        setDeleted(true);
      }
    });
    // navigate('/nerfguns/page/1');
  };

  useEffect(() => {
    console.log(deleted);
    deleted && navigate('/nerfguns/page/1');
  }, [deleted, navigate]);

  return (
    <div className='container-fluid'>
      {data && (
        <>
          <div className='d-flex justify-content-between'>
            <Link to='/nerfguns/addgun' className='btn btn-outline-success'>
              Add New Gun
            </Link>
            <div className='row'>
              <select
                className='form-select form-select'
                aria-label='.form-select-sm example'
                defaultValue={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
              >
                {pageSizes.map((value, idx) => (
                  <option key={idx} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className='bd-highlight'>
              <button
                type='button'
                className='btn btn-outline-danger'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Delete All
              </button>

              <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLabel'>
                        Delete confirmation
                      </h5>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div className='modal-body'>
                      Are you sure you want to delete all items displayed?
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                      >
                        No! Get me out of here!
                      </button>
                      <button
                        type='button'
                        className='btn btn-outline-danger'
                        onClick={handleClick}
                        data-bs-dismiss='modal'
                      >
                        Yes! Delete all!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            {data.map((item) => (
              <div
                key={item.id}
                className='col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex align-items-stretch'
              >
                <Gun gun={item} />
              </div>
            ))}
          </div>
          <div className='row'>
            <div className='col'>
              <nav aria-label='Page navigation example'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <Link
                      to={`/nerfguns/page/${Number(params.pageNumber) - 1}`}
                      className={`btn btn-outline-primary ${
                        params.pageNumber == undefined || params.pageNumber == 1
                          ? 'disabled'
                          : ''
                      }`}
                    >
                      Previous
                    </Link>
                  </li>
                  <li className='page-item'>
                    <Link
                      to={`/nerfguns/page/${params.pageNumber}`}
                      className='btn btn-outline-primary'
                    >
                      {params.pageNumber || 1}
                    </Link>
                  </li>
                  {pages > 2 && (
                    <li className='page-item active' aria-current='page'>
                      <Link
                        to={`/nerfguns/page/${
                          params.pageNumber == undefined
                            ? 2
                            : Number(params.pageNumber) + 1
                        }`}
                        className='btn btn-outline-primary'
                      >
                        {params.pageNumber == undefined
                          ? 2
                          : Number(params.pageNumber) + 1}
                      </Link>
                    </li>
                  )}

                  {pages > 4 && (
                    <li className='page-item active' aria-current='page'>
                      <span className='btn btn-outline-primary disabled'>
                        ...
                      </span>
                    </li>
                  )}
                  <li className='page-item'>
                    <Link
                      to={`/nerfguns/page/${pages}`}
                      className='btn btn-outline-primary'
                    >
                      {pages}
                    </Link>
                  </li>

                  <li className='page-item'>
                    <Link
                      to={`/nerfguns/page/${
                        params.pageNumber == undefined
                          ? 2
                          : Number(params.pageNumber) + 1
                      }`}
                      className={`btn btn-outline-primary ${
                        params.pageNumber == pages ? 'disabled' : ''
                      }`}
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NerfGunsScreen;
