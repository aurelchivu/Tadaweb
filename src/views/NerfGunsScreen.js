import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Gun from '../components/Gun';
import useFetch from '../utils/useFetch';

const NerfGunsScreen = () => {
  const params = useParams();
  const pageNumber = params.pageNumber || 1;
  const pageSizes = [4, 8, 20, 50];
  const [pageSize, setPageSize] = useState(pageSizes[3]);
  const { data, pages } = useFetch(
    'http://localhost:8000/guns',
    pageNumber,
    pageSize
  );

  const deleteAll = () => {};

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

            <button
              onClick={deleteAll}
              type='button'
              className='btn btn-outline-danger'
            >
              Delete All
            </button>
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
