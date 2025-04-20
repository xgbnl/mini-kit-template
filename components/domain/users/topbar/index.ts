// Ant Imports
import type { IAvatarProps } from 'antd-mini/es/Avatar/props'

// Types Imports
import type { User } from 'types/domain/users/topbar'

type Props = User & Pick<IAvatarProps, 'size'>

Component<{}, Props>({
  mixins: [],
  data: {},
  props: {
    avatar: '',
    nickname: '',
    auth: undefined,
    size: 'medium'
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {},
});
