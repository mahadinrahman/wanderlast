'use client'
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const DeleteBooking = ({handleCancleBooking,data}) => {
    return (
        <div>
             <AlertDialog>
                         <Button variant='outline' className={'rounded-none my-4 text-red-500 border-red-500'}><TrashBin></TrashBin>Cancel</Button>
                        <AlertDialog.Backdrop>
                            <AlertDialog.Container>
                                <AlertDialog.Dialog className="sm:max-w-[400px]">
                                    <AlertDialog.CloseTrigger />
                                    <AlertDialog.Header>
                                        <AlertDialog.Icon status="danger" />
                                        <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
                                    </AlertDialog.Header>
                                    <AlertDialog.Body>
                                        <p>
                                            This will permanently delete <strong>{data.destinationName}</strong> and all of its
                                            data. This action cannot be undone.
                                        </p>
                                    </AlertDialog.Body>
                                    <AlertDialog.Footer>
                                        <Button slot="close" variant="tertiary">
                                            Cancel
                                        </Button>
                                        <Button onClick={handleCancleBooking} slot="close" variant="danger">
                                            Delete
                                        </Button>
                                    </AlertDialog.Footer>
                                </AlertDialog.Dialog>
                            </AlertDialog.Container>
                        </AlertDialog.Backdrop>
                    </AlertDialog>
        </div>
    );
};

export default DeleteBooking;