import React, { useState } from 'react';
import { EmployeeAdapter } from '../adapters/User/Employee';
import { ClientAdapter } from '../adapters/User/Client';
import { EstablishmentAdapter } from '../adapters/Establishment/Establishment';

import RequestLocation from '../components/RequestLocation/RequestLocation';
import { ServiceAdapter } from '../adapters/Products/Service';

const Test: React.FC = () => {
    const [adapter, setAdapter] = useState<any>(null);
    const [result, setResult] = useState<any | null>(null);
    const token: string = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjbGllbnRlLmZ1bmNpb25hcmlvQGV4YW1wbGUuY29tIiwiaWF0IjoxNzE2Njg1MDA4LCJleHAiOjE3MjAyODUwMDh9.LP8YtwGKhrD2WLUZE1tr1Ev6QmoiuVEgglIEIbdvy-YI9myReBn2QM09wWDrCAnhflCAAoq2DulrV9Z0V3HkJg';

    const testAdapter = async () => {
        if (adapter) {
            const { type, method, params } = adapter;
            switch (type) {
                case 'Employee':
                    const employeeAdapter = new EmployeeAdapter();
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
                            const getByIdResult = await employeeAdapter.getEmployeeById(params.id);
                            setResult(getByIdResult);
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
                            const getByIdResult = await establishmentAdapter.getEstablishmentById(params.id);
                            setResult(getByIdResult);
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
                    <option value={JSON.stringify({ type: 'Employee', method: 'login', params: { loginDto: { email: 'cliente.funcionario@example.com', password: '123senha' } } })}>Login</option>
                    <option value={JSON.stringify({ type: 'Employee', method: 'create', params: { createDto: { name: 'John Doe', email: 'john@example.com', password: 'password', fkEstablishment: 1, fkEmployeeType: 1 } } })}>Create</option>
                    <option value={JSON.stringify({ type: 'Employee', method: 'update', params: { id: 1, updateFields: { name: 'Updated Name' } } })}>Update</option>
                    <option value={JSON.stringify({ type: 'Employee', method: 'getById', params: { id: 2 } })}>Get by ID</option>
                </optgroup>
                <optgroup label="Client Adapter">
                    <option value={JSON.stringify({ type: 'Client', method: 'login', params: { loginDto: { email: 'cliente.a@example.com', password: '123senha' } } })}>Login</option>
                    <option value={JSON.stringify({ type: 'Client', method: 'create', params: { createDto: { name: 'Jane Doe', email: 'jane@example.com', password: 'password', profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3rBWVF3ujofB707ALZWHYPV2tY6NCml8jg&usqp=CAU'}}})}>Register</option>
                    <option value={JSON.stringify({ type: 'Client', method: 'update', params: { id: 1, updateFields: { name: 'Updated Name' } } })}>Update</option>
                    <option value={JSON.stringify({ type: 'Client', method: 'getById', params: { id: 1 } })}>Get by ID</option>
                </optgroup>
                <optgroup label="Establishment Adapter">
                    <option value={JSON.stringify({ type: 'Establishment', method: 'create', params: { createDto: { name: 'ABC Company', cnpj: '04.252.011/0001-10', startShift: '08:00:00', endShift: '18:00:00', fkLocal: 1, profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3rBWVF3ujofB707ALZWHYPV2tY6NCml8jg&usqp=CAU', description: 'Lorem ipsum dolor sit amet', fkServices: [1], fkFilters: [1] } } })}>Register</option>
                    <option value={JSON.stringify({ type: 'Establishment', method: 'update', params: { id: 1, updateFields: { name: 'Updated Name' } } })}>Update</option>
                    <option value={JSON.stringify({ type: 'Establishment', method: 'getById', params: { id: 4 } })}>Get by ID</option>
                </optgroup>
                <optgroup label="Service Adapter">
                    <option value={JSON.stringify({ type: 'Service', method: 'create', params: { createDto: { specification: 'Corte', fkServiceType: 1}}})}>Register</option>
                    <option value={JSON.stringify({ type: 'Service', method: 'update', params: { id: 1, updateFields: { specification: 'Pintura' } } })}>Update</option>
                    <option value={JSON.stringify({ type: 'Service', method: 'getById', params: { id: 1 } })}>Get by ID</option>
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
