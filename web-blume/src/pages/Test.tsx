import React, { useState } from 'react';
import { EmployeeAdapter } from '../adapters/User/Employee/Employee';
import { EmployeeServicesAdapter} from '../adapters/User/Employee/EmployeeServices';
import { ClientAdapter } from '../adapters/User/Client/Client';
import { EstablishmentAdapter } from '../adapters/Establishment/Establishment';

import RequestLocation from '../components/RequestLocation/RequestLocation';
import { ServiceAdapter } from '../adapters/Products/Service/Service';
import { ServiceTypeAdapter } from '../adapters/Products/Service/ServiceType';
import { SchedulingAdapter } from '../adapters/Scheduling/Scheduling';

const Test: React.FC = () => {
  const [adapter, setAdapter] = useState<any>(null);
  const [result, setResult] = useState<any | null>(null);
  const token: string =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsImlhdCI6MTcxNzgwMTM1MSwiZXhwIjoxNzIxNDAxMzUxfQ.5pmdz2iyCs4omgYDy2EMYYDA3hi80f_aYPqoG7U4RUFWy-aKiH1nPEN2BFplASwieMerngM_QvA1hcl7puct-w";

    const testAdapter = async () => {
        if (adapter) {
            const { type, method, params } = adapter;
            switch (type) {
                case 'Employee':
                    const employeeAdapter = new EmployeeAdapter();
                    const employeeServicesAdapter = new EmployeeServicesAdapter();
                    switch (method) {
                        case 'login':
                            const loginResult = await employeeAdapter.login(params.loginDto);
                            setResult(loginResult);
                            break;
                        case 'create':
                            const createResult = await employeeAdapter.create(params.createDto);
                            setResult(createResult);
                            break;
                        case 'update':
                            const updateResult = await employeeAdapter.update(params.id, params.updateFields);
                            setResult(updateResult);
                            break;
                        case 'getById':
                            const getByIdResult = await employeeAdapter.getEmployeeById(1);
                            setResult(getByIdResult);
                            break;
                        case 'getServices':
                            const getServiceResult = await employeeServicesAdapter.create(params.createDto);
                            setResult(getServiceResult);
                            break;
                        default:
                            break;
                    }
                    break;
                case 'Client':
                    const clientAdapter = new ClientAdapter();
                    switch (method) {
                        case 'login':
                            const loginResult = await clientAdapter.login(params.loginDto);
                            setResult(loginResult);
                            break;
                        case 'create':
                            const createResult = await clientAdapter.register(params.createDto);
                            setResult(createResult);
                            break;
                        case 'update':
                            const updateResult = await clientAdapter.update(params.id, params.updateFields, token);
                            setResult(updateResult);
                            break;
                        case 'getById':
                            const getByIdResult = await clientAdapter.getClientById(params.id, token);
                            setResult(getByIdResult);
                            break;
                        default:
                            break;
                    }
                    break;
                case 'Establishment':
                    const establishmentAdapter = new EstablishmentAdapter();
                    switch (method) {
                        case 'create':
                            const createResult = await establishmentAdapter.register(params.createDto);
                            setResult(createResult);
                            break;
                        case 'update':
                            const updateResult = await establishmentAdapter.update(params.id, params.updateFields);
                            setResult(updateResult);
                            break;
                        case 'getById':
                            const getByIdResult = await establishmentAdapter.getEstablishmentById(1);
                            setResult(getByIdResult);
                            break;
                        case 'getAll':
                                const getAllResult = await establishmentAdapter.getAllOfEstab(params.id);
                                setResult(getAllResult);
                                break;
                        default:
                            break;
                    }
                    break;
                case 'Service':
                    const serviceAdapter = new ServiceAdapter();
                    switch (method) {
                        case 'create':
                            const createResult = await serviceAdapter.register(params.createDto);
                            setResult(createResult);
                            break;
                        case 'update':
                            const updateResult = await serviceAdapter.update(params.id, params.updateFields);
                            setResult(updateResult);
                            break;
                        case 'getById':
                            const getByIdResult = await serviceAdapter.getServiceById(params.id);
                            setResult(getByIdResult);
                            break;
                        default:
                            break;
                    }
                    break;
                case 'ServiceType' :
                    const serviceTypeAdapter = new ServiceTypeAdapter();
                    switch (method) {
                        case 'getById':
                            const getByIdResult = await serviceTypeAdapter.getServiceTypeById(params.id);
                            setResult(getByIdResult);
                        break;
                        case 'getAll':
                            const getAllResult = await serviceTypeAdapter.getAllServicesType();
                            setResult(getAllResult);
                        break;

                    }
                    break;
                case 'Scheduling' :
                    const scheduling = new SchedulingAdapter();
                    switch (method) {
                        case 'getAll':
                            const getAllResult = await scheduling.getAllSchedulings();
                            setResult(getAllResult);
                        break;

                    }
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <div>
            <h1>Test Functions</h1>
            <select onChange={(e) => setAdapter(JSON.parse(e.target.value))}>
                <option value="">Select Adapter</option>
                <optgroup label="Employee Adapter">
                    <option value={JSON.stringify({ type: 'Employee', method: 'login', params: { loginDto: { email: 'funcionario.a@example.com', password: 'senha123' } } })}>Login</option>
                    <option value={JSON.stringify({ type: 'Employee', method: 'create', params: { createDto: { name: 'John Doe', email: 'john@example.com', imgUrl: 'https://i.pinimg.com/236x/44/46/4c/44464c4660f6ec0701a506353a41e1e2.jpg',  password: 'password', fkEstablishment: 1, employeeType: 1 } } })}>Create</option>
                    <option value={JSON.stringify({ type: 'Employee', method: 'update', params: { id: 1, updateFields: { name: 'Updated Name' } } })}>Update</option>
                    <option value={JSON.stringify({ type: 'Employee', method: 'getById', params: { id: 2 } })}>Get by ID</option>
                    <option value={JSON.stringify({ type: 'Employee', method: 'getServices' })}>Get Services</option>
                </optgroup>
                <optgroup label="Client Adapter">
                    <option value={JSON.stringify({ type: 'Client', method: 'login', params: { loginDto: { email: 'teste@example.com', password: 'password' } } })}>Login</option>
                    <option value={JSON.stringify({ type: 'Client', method: 'create', params: { createDto: { name: 'Jane Doe', email: 'teste@example.com', password: 'password', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3rBWVF3ujofB707ALZWHYPV2tY6NCml8jg&usqp=CAU', local: 1}}})}>Register</option>
                    <option value={JSON.stringify({ type: 'Client', method: 'update', params: { id: 1, updateFields: { name: 'Updated Name' } } })}>Update</option>
                    <option value={JSON.stringify({ type: 'Client', method: 'getById', params: { id: 1 } })}>Get by ID</option>
                </optgroup>
                <optgroup label="Establishment Adapter">
                    <option value={JSON.stringify({ type: 'Establishment', method: 'create', params: { createDto: { name: 'ABC Company', companyId: 1, localId: 1, imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3rBWVF3ujofB707ALZWHYPV2tY6NCml8jg&usqp=CAU' }}})}>Register</option>
                    <option value={JSON.stringify({ type: 'Establishment', method: 'update', params: { id: 1, updateFields: { imgUrl: 'https://i.pinimg.com/236x/44/46/4c/44464c4660f6ec0701a506353a41e1e2.jpg', name: 'Salão maneiro' }}})}>Update</option>
                    <option value={JSON.stringify({ type: 'Establishment', method: 'getById', params: { id: 1 } })}>Get by ID</option>
                    <option value={JSON.stringify({ type: 'Establishment', method: 'getAll', params: { id: 1 } })}>Get All</option>
                </optgroup>
                <optgroup label="Service Adapter">
                    <option value={JSON.stringify({ type: 'Service', method: 'create', params: { createDto: { specification: 'Corte', serviceType: 1}}})}>Register</option>
                    <option value={JSON.stringify({ type: 'Service', method: 'update', params: { id: 1, updateFields: { specification: 'Pintura' } } })}>Update</option>
                    <option value={JSON.stringify({ type: 'Service', method: 'getById', params: { id: 1 } })}>Get by ID</option>
                </optgroup>
                <optgroup label="Service Type Adapter">
                    {/* <option value={JSON.stringify({ type: 'ServiceType', method: 'create', params: { createDto: { specification: 'Corte', serviceType: 1}}})}>Register</option>
                    <option value={JSON.stringify({ type: 'Service', method: 'update', params: { id: 1, updateFields: { specification: 'Pintura' } } })}>Update</option> */}
                    <option value={JSON.stringify({ type: 'ServiceType', method: 'getById', params: { id: 1 } })}>Get by ID</option>
                    <option value={JSON.stringify({ type: 'ServiceType', method: 'getAll'})}>Get All</option>
                </optgroup>
                <optgroup label="Scheduling Adapter">
                    {/* <option value={JSON.stringify({ type: 'ServiceType', method: 'create', params: { createDto: { specification: 'Corte', serviceType: 1}}})}>Register</option>
                    <option value={JSON.stringify({ type: 'Service', method: 'update', params: { id: 1, updateFields: { specification: 'Pintura' } } })}>Update</option> */}
                    {/* <option value={JSON.stringify({ type: 'ServiceType', method: 'getById', params: { id: 1 } })}>Get by ID</option> */}
                    <option value={JSON.stringify({ type: 'Scheduling', method: 'getAll'})}>Get All</option>
                </optgroup>
            </select>
            <button onClick={testAdapter}>Test</button>
            {result && (
                <div>
                    <h2>Result</h2>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                    <RequestLocation />
                </div>
            )}
        </div>
    );
};

export default Test;
