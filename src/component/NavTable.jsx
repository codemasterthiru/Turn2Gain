import React, { useState, useEffect } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { dateToString } from '../utils';
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/themes/lara-dark-teal/theme.css";
import "primereact/resources/themes/mdc-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Dropdown } from 'primereact/dropdown';

export const NavTable = (props) => {
    const { data } = props;
    const [filters, setFilters] = useState(null);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    useEffect(() => {
        initFilters();
    }, []);

    const clearFilter = () => {
        initFilters();
    };

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
            nav: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between">
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </span>
            </div>
        );
    };

    const dateFilterTemplate = (options) => {
        return <Calendar value={ options.value } onChange={ (e) => options.filterCallback(e.value, options.index) } dateFormat="mm/dd/yy" placeholder="mm/dd/yy" />;
    };

    const balanceFilterTemplate = (options) => {
        let config = {
            mode: "decimal",
            maxFractionDigits: 5,
            minFractionDigits: 2,
        };

        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} {...config} />;
    };

    const header = renderHeader();

    const paginatorTemplate = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];
            return (
                <React.Fragment>
                    <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                    <Dropdown className="primary-dropdown" value={options.value} options={dropdownOptions} onChange={options?.onChange} />
                </React.Fragment>
            );
        },
        'CurrentPageReport': (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            )
        }
    }

    return (
        <div className="nav-table-container">
            <DataTable value={data} paginator showGridlines paginatorTemplate={paginatorTemplate} rows={10} loading={loading} dataKey="id"
                    filters={filters} globalFilterFields={['name', 'country.name', 'representative.name', 'balance', 'status']} header={header}
                    emptyMessage="No records found.">
                <Column header="Date" field="date" dataType="date" style={{ minWidth: '10rem' }} filter filterElement={dateFilterTemplate} sortable />
                <Column header="NAV" field="nav" dataType="numeric" style={{ minWidth: '10rem' }} filter filterElement={balanceFilterTemplate} sortable />
            </DataTable>
        </div>
    );
}
