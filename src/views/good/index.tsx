import React from 'react';
import { Dispatch } from 'redux';
import { INSERT_GOOD } from '../../store/good';
import { GlobalState } from '../../store';
import { connect } from 'react-redux';

type GoodOwnProps = {
    content:string;
}

type GoodDispatchProps = {
    dispatch: Dispatch
}

type GoodProps = GoodOwnProps & GoodDispatchProps;

const mapState2Props = (state: GlobalState) => {
    return {
        content:state.good.hello
    }
}

const mapAction2Props = (dispatch: Dispatch) => {
    return {
        dispatch
    }
}

function Good ({
    content,
    dispatch
}: GoodProps) {
    return (
        <div className="hello" onClick={() => {
            dispatch({
                type: INSERT_GOOD,
                payload: 'jfdjfkdjsfs'
            })
        }}>
            {content}
        </div>
    )
}

export default connect(mapState2Props, mapAction2Props)(Good)