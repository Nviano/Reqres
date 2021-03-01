import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDropzone } from 'react-dropzone';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router';
import useStyles from "./UserFormViewStyles";
import { USERS_LIST } from '../../config/router/paths';
import { Grid, Typography } from '@material-ui/core';
import ButtonComponent from '../../components/ButtonComponent';
import FileInputComponent from '../../components/FileInputComponent';

const UserFormView = () => {

    const defaultValues = {
        avatar: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    const { handleSubmit, register, watch } = useForm({
        defaultValues,
        mode: 'onBlur',
    });

    const data = watch();

    const createUser = async () => {
        const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.email,
                job: 'developer',
                first_name: data.firstName,
                last_name: data.lastName,
                avatar: files[0].preview
            })
        });
        if (!response.ok) {
            throw new Error('Hubo un error cargando la lista de usuarios');
        }
        return await response.json();
    }

    const queryClient = useQueryClient();
    const history = useHistory();
    const classes = useStyles();

    const mutation = useMutation(createUser, {
        onSettled: () => {
            console.log('final');
        },
        onSuccess: (response) => {
            queryClient.setQueryData('USERS', (users) => {
                return {
                    ...users,
                    data: [
                        ...users.data,
                        {
                            id: response.id,
                            email: response.name,
                            first_name: response.first_name,
                            last_name: response.last_name,
                            avatar: response.avatar
                        }
                    ]
                }
            });
            history.push(USERS_LIST);
            console.log('success');
        },
        onError: () => {
            console.log('error')
        }
    });

    const onCreateUserClick = () => {
        mutation.mutate();
    }



    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/jpeg, image/png',
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const thumbs = files.map((file) => (
        <Grid item className={classes.thumb} key={file.name}>
            <Grid item className={classes.thumbInner}>
                <img className={classes.img} src={file.preview} alt='attached_document' />
            </Grid>
        </Grid>
    ));

    return (
        <Grid container item xs={12} className={classes.centerContent}>
            <Grid item xs={12}>
                <Typography variant='h4' className={classes.centerText}>Agregar usuario</Typography>
            </Grid>
            <Grid item xs={6}>
                <form onSubmit={handleSubmit(createUser)}>
                    <label>Avatar:</label>
                    {files.length === 0 ?
                        <FileInputComponent files={files} getInputProps={getInputProps} getRootProps={getRootProps} className={classes.dropzoneText} />
                        : thumbs
                    }
                    <label>Nombre:</label>
                    <input name='firstName' ref={register} className={classes.input} />
                    <label>Apellido:</label>
                    <input name='lastName' ref={register} className={classes.input} />
                    <label>Email:</label>
                    <input name='email' ref={register} className={classes.input} />
                    <ButtonComponent onClick={onCreateUserClick} label='Crear' padding={10} />
                </form>
            </Grid>
        </Grid>
    )
}

export default UserFormView;