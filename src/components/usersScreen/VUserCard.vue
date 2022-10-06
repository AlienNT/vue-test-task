<template>
    <ul class="v-user-card">
        <li class="user-card__item user-card__photo">
            <div class="photo-wrapper">
                <img
                    :src="displayedPhoto"
                    :alt="`${userName} photo`"
                    class="user-avatar"
                    @error="setLoadPhotoStatus(false)"

                >
            </div>
        </li>
        <li class="user-card__item user-card__name">
            {{ userName }}
        </li>
        <li class="user-card__item user-card__position">
            {{ userPosition }}
        </li>
        <li class="user-card__item user-card__email">
            {{ userEmail }}
        </li>
        <li class="user-card__item user-card__phone">
            {{ userPhone }}
        </li>
        <li class="user-card__item user-card__date">
            {{ userDate }}
        </li>
    </ul>
</template>

<script>
import { fieldNames } from '@/apiOptions'
import { timeStampToDate } from '@/methods'

export default {
    name: 'VUserCard',
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    data () {
        return {
            isUserPhotoError: null
        }
    },
    computed: {
        defaultPhoto () {
            return require('../../assets/images/photo-cover.svg')
        },
        displayedPhoto () {
            return this.isUserPhotoError ? this.defaultPhoto : this.userPhoto
        },
        userPhoto () {
            return this.data[fieldNames.USER.PHOTO]
        },
        userName () {
            return this.data[fieldNames.USER.NAME]
        },
        userPosition () {
            return this.data[fieldNames.USER.POSITION]
        },
        userEmail () {
            return this.data[fieldNames.USER.EMAIL]
        },
        userPhone () {
            return this.data[fieldNames.USER.PHONE]
        },
        userDate () {
            const date = this.getDate()
            return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
    },
    methods: {
        getDate () {
            return timeStampToDate(this.data[fieldNames.USER.REGISTRATION_TIMESTAMP])
        },
        setLoadPhotoStatus (status) {
            this.isUserPhotoError = !status
        }
    }
}
</script>

<style scoped lang="scss">
.v-user-card {
    padding: 20px;
    background: $cardBgColor;
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.user-card__item {
    display: block;
    text-align: center;
    line-height: 28px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.user-card__photo, .user-card__name {
    margin-bottom: 20px;
}

.user-card__photo {
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    width: 100%;
    height: 50%;
}

.user-avatar {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    object-fit: cover;
    background: #cccccc;
}
</style>
