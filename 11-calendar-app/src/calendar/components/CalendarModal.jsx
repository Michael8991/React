import { addHours, differenceInSeconds } from 'date-fns';
import { useState } from 'react';
import Modal from 'react-modal'
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { es } from 'date-fns/locale/es';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
import { useMemo } from 'react';
import { useCalendarStore, useUiStore } from '../../hooks';
import { useEffect } from 'react';

registerLocale('es', es)

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore()
    const { activeEvent, startSavingEvent } = useCalendarStore()

    const [formSumbited, setFormSumbited] = useState(false)

    const [formValues, setFormValues] = useState({
        title: '',
        body: '',
        startDate: new Date(),
        endDate: addHours(new Date(), 2)
    })

    const titleClass = useMemo(() => {
        if (!formSumbited) return '';
        return (formValues.title.length > 0)
            ? 'is-valid'
            : 'is-invalid';
    }, [formValues.title, formSumbited])

    useEffect(() => {
        if (activeEvent !== null) {
            setFormValues({ ...activeEvent })
        }
    }, [activeEvent])


    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        })
    }

    const onCloseModal = () => {
        closeDateModal();
    }

    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSumbited(true)
        const difference = differenceInSeconds(formValues.endDate, formValues.startDate)
        if (isNaN(difference) || difference <= 0) {
            Swal.fire('Fechas incorrectas', 'Revisar las fechas ingresadas', 'error')
            return;
        }
        if (formValues.title <= 0) return;

        await startSavingEvent(formValues);
        closeDateModal();
        setFormSumbited(false)

    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}

        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onSubmit}>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>

                    <DatePicker
                        locale="es"
                        minDate={Date()}
                        name='startDate'
                        selected={formValues.startDate}
                        onChange={(event) => onDateChanged(event, 'startDate')}
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        timeCaption='Hora'
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker
                        locale="es"
                        name='endDate'
                        minDate={formValues.startDate}
                        selected={formValues.endDate}
                        onChange={(event) => onDateChanged(event, 'endDate')}
                        className='form-control'
                        dateFormat="Pp"
                        showTimeSelect
                        timeCaption='Hora'
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="body"
                        value={formValues.body}
                        onChange={onInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
    )
}
