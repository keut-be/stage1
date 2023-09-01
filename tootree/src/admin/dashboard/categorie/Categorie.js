import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, Typography, gridClasses } from '@mui/material';
import { grey } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import axios from '../../../api/axios';
import { forwardRef, useEffect, useState } from 'react';
import { getcategory } from '../../../api/category.api';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from "react-hook-form";
import '../../../assets/css/bootstrap.min.css';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';



const Categorie = () => {


    const [categories, setCategories] = useState([])
    const [isLoaded,setIsLoaded] = useState(true);
    
        useEffect(() => {
            getcategory()
            .then(res => {
                setIsLoaded(false);
                console.log("res from api", res)
                setCategories(res.data)
                
            })
            .catch(function (error) {
                console.log(error);
            });
        }, []);

        

    const columns=  [
        {field:'name', headerName:'Name', width:170, type:'string'},
        {field:'description', headerName:'Description', width:170, type:'string'},
        {field:'id', headerName:'Id', width:200, type:'number',
            valueGetter: (i) => `${i++} `
        },
        {field:'edit', headerName:'Edit', width:220,   type:'actions', renderCell: (params) =><ModeEditIcon {...{params}} />,},
        {field:'delete', headerName:'Delete', width:225,  type:'actions', renderCell: (params) =><DeleteOutlineIcon {...{params}} />,},
    ];


    //pop up de creation de la categorie
        const [open, setOpene] = useState(false);
        const openCreate = () =>{
            setOpene(true);
        };

        const closeCreate = () =>{
            setOpene(false);
        };


        const {
            register,
            handleSubmit,
            formState :
            {errors}
          } = useForm();

          const [role, setRole] = useState();

          const onSubmitHandler = (data) => {
           
            console.log(data);
        
            axios
              .post("postcategories", data)
              .then(function (response) {
                console.log(response.status);
              })
              .catch(function (error) {
                console.log(error);
              });
          };

    return (
        <div>

            <Dialog open={open} fullWidth maxWidth='sm'>
                <DialogTitle>Create new Category is This<Button onClick={closeCreate} sx={{alignItems:'flex-end'}}><CloseIcon /></Button ></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className='mb-2'>
                                <input type='first_name' placeholder='Enter name' className='form-control' {...register('name')} />
                            </div>
                            <div className='mb-2'>
                                <input type='last_name' placeholder='Enter description' className='form-control' {...register('description')} />
                            </div>
                            <div>
                                <input type='number' className='d-none' value={1} {...register('admin_id')} />
                            </div>
                            <Button type='submit' onClick={closeCreate}>Create <AddIcon /></Button>
                        </form>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            <Box
                sx={{
                    height:400,
                    width:'100%'
                }}
            >
                <Typography
                    variant='h3'
                    component='h3'
                    sx={{textAlign:'center', mt:3, mb:3}}
                >
                    Category
                </Typography>
                <Button 
                    onClick={openCreate}
                >
                    <LibraryAddIcon /> Ajouter une Category
                </Button>
                <DataGrid
                    rows={categories}
                    getRowId={rows => rows.id}
                    columns={columns}
                    id='id'
                    initialState={{
                    pagination: {
                    paginationModel: { page: 0, pageSize: 8},
                },
                }}
                pageSizeOptions={[5, 10, 20]}
                checkboxSelection
                getRowSpacing={params => ({
                    top:params.isFirstVisible ? 0 : 5,
                    bottom: params.isFirstVisible ? 0 : 5
                })}
                sx={{
                    [`& .${gridClasses.row}`]:{
                        bgcolor:theme=>theme.palette.mode ==='light' ? grey[200] : grey[900]
                    }
                }}
            />
            </Box>
        </div>
        
    );
}

export default Categorie;



