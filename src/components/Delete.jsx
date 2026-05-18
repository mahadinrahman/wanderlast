'use client'
import { Button, Modal, Surface } from '@heroui/react';
import { redirect } from 'next/navigation';

import React from 'react';

const Delete = ({data}) => {
     const handleDelete=async()=>{
        const res =await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${data._id}`,{
            method:"DELETE",
            headers :{
                "content-type":"application/json"
            },
            
        })
        redirect('/all-destination')
        const deleteResult =await res.json();
     }

    return (
        <div>
             <Modal>
        <Button variant="outline" className="flex gap-1 items-center">Delete</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-6/11">
              <Modal.CloseTrigger />
              <Modal.Header>

                <Modal.Heading className="flex items-center gap-2">Delete</Modal.Heading>

              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                    <p className='mb-5'>Are you sure you want to delete <strong>{data.destinationName}?</strong> This action cannot be undone and will permanently remove this travel package from the system.</p>
                   <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button onClick={handleDelete} variant='danger' type="submit" slot="close">Delete</Button>
                    </Modal.Footer>
                </Surface>
              </Modal.Body>
              
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
        </div>
    );
};

export default Delete;